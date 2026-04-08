const API_KEY = "TfJoed0KYx6Oym4DU7SGHynzXHu5k9eF";
// example API call: https://api.geocodify.com/v2/geocode?api_key=YOUR_API_KEY&q=900 Boston Post Road, Guilford Center, CT, USA
const API_URL = " https://api.geocodify.com/v2/geocode";

async function forwardGeocode(address) {
    console.log("address =", address)
    const response = await axios.get(API_URL, {
        params: {
            api_key: API_KEY,
            q: address
        }
    });
    console.log(response.data);
}

forwardGeocode("International Plaza Singapore");