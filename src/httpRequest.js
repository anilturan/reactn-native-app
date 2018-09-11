
export const get = (/** string **/ url, /** func **/ callback) => {
    var config = {
        headers: {
            // "authorization": "7c803a2f-f923-4e9f-a598-66bf280e9bf-",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    }
    fetch(url, config)
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            callback(result, null);
        })
        .catch(error => {
            if (error.response && error.response.status === 401) {
                // refreshToken(url, callBack);
                console.log(error);
            }
            else {
                callback(null, error);
            }
        });
}