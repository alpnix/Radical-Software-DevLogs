// main.js - client-side code to connect to the Bad Password API

// Use local API when running the Express server (static + dynamic routes)
const BAD_PASSWORD_API = "/api/custom";

// REFERENCES
let password = document.querySelector("#password");
let button = document.querySelector("#submit");
let info = document.querySelector("#info");

// EVENTS
window.addEventListener("load", updatePassword);
document.addEventListener("submit", (e) => {
    e.preventDefault();
    updatePassword();
});

// add a change event listener to each option
document.querySelectorAll("input[type=radio]").forEach((ele) => {
    ele.addEventListener("change", updatePassword);
});

function getSelectedParams() {
    const group1 = document.querySelector('input[name="group1"]:checked')?.value || "endearments";
    const group2 = document.querySelector('input[name="group2"]:checked')?.value || "dates";
    return `${group1},${group2}`;
}

// fetch password from Bad Password API and display in UI
async function updatePassword() {
    try {
        const params = getSelectedParams();
        const url = `${BAD_PASSWORD_API}?params=${encodeURIComponent(params)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();

        const message = data.message || "";
        password.value = message;
        password.setAttribute("data-bs-title", message);
        info.textContent = `Params: ${params}`;
    } catch (err) {
        console.error(err);
        password.value = "Could not load password";
        info.textContent = "Try again later.";
    }
}
