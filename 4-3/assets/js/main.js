// main.js (client side, run by the browser) 

//////////////////////////////////////
/////////////// INIT /////////////////
//////////////////////////////////////

// base url for 10.3
let baseurl = "https://big-feelings.vercel.app";

// 👉 add new base url to pull from your own database (Chapter 10 wiki) ...
baseurl = "";
// 👈


// declare data in global scope so to access from other functions
let data = [];

async function main() {
    data = await fetchFeelings();
    console.log(data);
    await updateMap(data);
}
main();

// create interface
(async () => {
    // update drop down
    updateOptions(colors);
})();


//////////////////////////////////////
///////////// FUNCTIONS //////////////
//////////////////////////////////////

// Fetch feelings data from the API server 
async function fetchFeelings() {
    return await fetchData(baseurl + "/api/feelings");
}
// a test file
async function fetchTestFeelings() {
    return await fetchData("/assets/data/test-feelings.json");
}

/**
 *  Fetch data from a URL
 */
async function fetchData(url) {
    return await fetch(url)
        .then((response) => response.json())
        .then((json) => {
            // console.log("fetch() response", json);
            return json;
        })
        .catch((err) => {
            throw new Error("Issue retrieving data from API");
        });
}



/**
 * Submit form handler
 */
function submitForm(e) {
    // step 1 - get form data
    e.preventDefault();
    let data = getFormData();
    console.log(data);

    // step 2 - create options object to send data
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    // step 3 - use fetch to send data
    fetch(baseurl + "/api/feeling", options)
        .then((response) => {
            if (!response.ok) throw new Error("Submit failed");
            return response.json();
        })
        .then(async (json) => {
            data = json;
            await updateMap(json);
            showSuccessMsg("Your feeling was added");
            if (typeof map !== 'undefined') map.closePopup();
        })
        .catch((err) => {
            console.error(err);
            showSuccessMsg("Something went wrong. Try again.", "#e74c3c");
        });
}


/**
 *  Get form data
 */
function getFormData() {
    // references
    let location = document.querySelector("#location");
    // get checked option
    let id = document.querySelector('input[name="feelings"]:checked').id;

    // update
    let feeling = "";
    let color = "";

    // if the checked option is in colors
    if (id < colors.length) {
        feeling = colors[id].feeling;
        color = colors[id].color;
    } else {
        // they chose "addYourOwn"
        feeling = document.querySelector("#text").value.trim() || "feeling";
        color = document.querySelector("#color").value;
    }
    // split the value of
    let [lat, lng] = location.value.split(",");
    // console.log(feeling, color, lat, lng);

    return {
        feeling: feeling,
        color: color,
        lat: lat,
        lng: lng,
    };
}

