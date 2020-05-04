const hospitalLocator = {};

/**
 * doesn't work b/c the api seems to be disabled
 */
hospitalLocator._getLocationFromIp = async function (ipAddress) {
    const requestUrl = `https://ipapi.co/json/`;
    const locationDetails = await fetch(requestUrl,{});
    const locationDetailsJson = await locationDetails.json();

    const {country,city,region,latitude,longitude} = locationDetailsJson;

    return {country,city,region,latitude,longitude};
}


/**
 * Returns object with latitude and longitude properties
 */
hospitalLocator._getLocationFromBrowser = function () {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000 // 60 seconds
    };

    return new Promise (function (resolve,reject) {
        if (!navigator.geolocation) {
            // unsupported
            reject();
        }

        navigator.geolocation.getCurrentPosition(onSuccess,onError,options);


        function onSuccess (position) {
            if (!position.coords) {
                reject();
            }

            const latitude = coords.latitude;
            const longitude = coords.longitude;
            
            resolve({longitude,latitude})
        }
        
        function onError () {
            reject()
        }
    });
}


hospitalLocator.getHospitalsNearby = async function () {
    const position = await hospitalLocator._getLocationFromBrowser();

    const latitude = position.latitude || 0;
    const longitude = position.longitude || 0;
    const requestUrl = `https://www.overpass-api.de/api/interpreter?data=[out:json][timeout:25];nwr(around:10000,${latitude},${longitude})[%22amenity%22=%22hospital%22];out%20center;`;

    const hospitalList = await fetch(requestUrl,{});
    const hospitalListJson = await hospitalList.json();

    return hospitalListJson;
}