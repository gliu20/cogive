<script>
	import VirtualList from './VirtualList.svelte';


	let view = {showCompleted:false};
	let tasks =  loadTasks();
	let karma = 0;
	let save = "Saved";

	function newTask() {
		tasks.push({
			name:"",
			time:0,
			deadline: Date.now(),
			id:"" + Date.now() + Math.random()
		});
		tasks = tasks;
	}
	
	function delTask(id) {
		return function () {
			tasks.splice(id,1);
			tasks = tasks;
		}
	}
	
	function completeTask(id) {
		return function () {
			tasks[id].complete = !tasks[id].complete;
			tasks[id].completedDate = Date.now();
			tasks = tasks;
		}
	}
	
	function removeAllTasks () { tasks = []; }
	
	function toggleCompleted() {
		view.showCompleted = !view.showCompleted;
	}
	
	function taskTimeAccumulator (acc,task){
		return (task.time || 0) * (task.complete ? 2 : 1) + acc;
	}

	function isDeadlineMissed (deadline, completedDate) {
		return deadline.getTime() - completedDate.getTime() < 0;
	}

	function calcTaskTimeliness (task) {
		var deadline = new Date(task.deadline || Date.now());
		var completedDate = new Date(task.completedDate);
		var today = new Date();

		const day = 1000 * 60 * 60 * 24;

		completedDate.setUTCSeconds(0);
		completedDate.setUTCMilliseconds(0);
		completedDate.setUTCMinutes(0);
		completedDate.setUTCHours(0);

		today.setUTCSeconds(0);
		today.setUTCMilliseconds(0);
		today.setUTCMinutes(0);
		today.setUTCHours(0);

		deadline.setUTCSeconds(0);
		deadline.setUTCMilliseconds(0);
		deadline.setUTCMinutes(0);
		deadline.setUTCHours(0);
		
		if (task.complete) {
			if (isDeadlineMissed(deadline, completedDate)) {
				// since task is completed, discount how late it is
				return (deadline.getTime() - completedDate.getTime()) / day / 2; 
			}
			return (deadline.getTime() - completedDate.getTime()) / day * 2; 
		}
		else {
			return (deadline.getTime() - today.getTime()) / day; 
		}

	}

	function taskTimelinessAccumulator (acc,task) {
		return acc + calcTaskTimeliness(task);
	}

	function computeKarma (tasks) {
		var karma = 0;
		var onTimeness = tasks.reduce(taskTimelinessAccumulator, 0);
		var timeRequired = tasks.reduce(taskTimeAccumulator, 0);

		karma += onTimeness;
		karma += timeRequired;

		return karma;
	}
	
	function saveTasks (tasks) {
		let successful = false;
		
		try {
			localStorage.setItem("tasks",JSON.stringify(tasks));
			successful = true;
		}
		catch (err) {
			console.log(err);
		}
		
		return successful ? "Saved" : "Not saved";
	}

	function loadTasks () {
		let successful = false;
		let savedTasks;
		
		try {
			savedTasks = localStorage.getItem("tasks") || "[]";
			savedTasks = JSON.parse(savedTasks);
			successful = true;
		}
		catch (err) {
			console.log(err);
		}

		if (successful) {
			return savedTasks;
		}

		return [];
	}

	function completeAllTasks () {
		tasks.forEach(task => {
			if (task.complete) {
				return;
			}

			task.complete = true;
			task.completedDate = Date.now();
		});
		tasks = tasks;
	}

	function debounce (timeout,callback,debounceCallback) {
		var instance;
		return function () {
			clearTimeout(instance);

			debounceCallback = debounceCallback || function () {};
			debounceCallback();

			instance = setTimeout(callback,timeout);
		}
	}

	let deferrables = debounce(1000,function () {
		karma = computeKarma(tasks);
		save = saveTasks(tasks);
	},function () {
		save = "Saving...";
	});
	
	// tasks is never used as a param but the svelte compiler
	// needs to know that deferrables depend on those values
	$: deferrables(tasks);
	
</script>

<h1>Task list</h1>
<p>Karma: {karma}	{save}	{tasks.length}</p>
<button on:click={newTask}>Add new task</button>
<button on:click={removeAllTasks}>Clear tasks</button>
<button on:click={completeAllTasks}>Complete tasks</button>
<button on:click={toggleCompleted}>Show/hide completed tasks</button>

<VirtualList items={tasks} let:item={task} let:index={index}>
		{#if !task.complete || view.showCompleted}
			<input type="text" size="25" bind:value={tasks[index].name} placeholder="Task">
			<input type="number" size="10" bind:value={tasks[index].time} placeholder="Time (mins)">
			<input type="date" size="10" bind:value={tasks[index].deadline} placeholder="deadline">
			<button on:click={completeTask(index)}>{task.complete ? "Uncomplete task" : "Complete task"}</button>
			<button on:click={delTask(index)}>Remove task</button>
		{/if}
</VirtualList>