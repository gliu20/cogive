/*
    timeout  - how long after function stops triggering to run
    callback - what to do after function stops triggering
    debounceCallback - what to run in the meantime (optional)
    example:
    debounce(1000, function () {
        aFunctionThatTakesAReallyLongTime()
    },
    function () {
        thisIsOptionalAndDoesntTakeALongTime()
        // can be just telling user that we're doing stuff...
    })
    //problem - the callback only triggers after the timeout so using one that will take time will slow everything down.
*/
function debounce(timeout, callback, debounceCallback) {
    var instance;
    return function () {
        clearTimeout(instance);
        debounceCallback = debounceCallback || function () { };
        debounceCallback();
        instance = setTimeout(callback, timeout);
    }
}