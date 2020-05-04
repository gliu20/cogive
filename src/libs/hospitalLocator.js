const hospitalLocator = {};


/**
 * doesn't work b/c the api seems to be disabled
 * TODO add caching
 */
hospitalLocator._getLocationFromIp = async function (ipAddress) {
    const requestUrl = `https://ipapi.co/json/`;
    const locationDetails = await fetch(requestUrl, {});
    const locationDetailsJson = await locationDetails.json();

    const { country, city, region, latitude, longitude } = locationDetailsJson;

    return { country, city, region, latitude, longitude };
}


/**
 * Returns object with latitude and longitude properties
 */
hospitalLocator._getLocationFromBrowser = function () {
    const cachedLocation = cache.get("location");

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000 // 60 seconds
    };

    return new Promise(function (resolve, reject) {
        if (cachedLocation.success) {
            resolve(cachedLocation.data);
        }

        if (!navigator.geolocation) {
            // unsupported
            reject();
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);


        function onSuccess(position) {
            if (!position.coords) {
                reject();
            }

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            cache.set("location", { longitude, latitude })
            resolve({ longitude, latitude })
        }

        function onError(err) {
            reject()
        }
    });
}


hospitalLocator.getLocationFromBrowser = async function () {

    let location;

    try {
        location = await hospitalLocator._getLocationFromBrowser();
    }
    catch (err) {
        // oh know but we are not affected
        // we just give default coordinate and let the system deal with it
        location = {latitude:41,longitude:-74};
    }

    return location;
}

hospitalLocator.getHospitalsNearby = async function () {

    const cachedHospitalList = cache.get("hospitalList");

    if (cachedHospitalList.success) {
        return cachedHospitalList.data;
    }

    const position = await hospitalLocator.getLocationFromBrowser();

    const latitude = position.latitude || 0;
    const longitude = position.longitude || 0;
    const requestUrl = `https://www.overpass-api.de/api/interpreter?data=[out:json][timeout:25];nwr(around:10000,${latitude},${longitude})[%22amenity%22=%22hospital%22];out%20center;`;

    const hospitalList = await fetch(requestUrl, {});
    const hospitalListJson = await hospitalList.json();

    cache.set("hospitalList", hospitalListJson);

    return hospitalListJson;
}

hospitalLocator.generateGeoJson = function (hospitalListJson) {
    // TODO
}
