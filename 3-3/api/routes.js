// route.js - Add endpoints to the API

//////////////////////////////////////
////////////// INIT //////////////////
//////////////////////////////////////

// import express, create router
import express from 'express';
const router = express.Router();

// import data for the API
import { data, functions } from "./data.js";
// console.log("data.pets", data.pets);


//////////////////////////////////////
////////////// ROUTES ////////////////
//////////////////////////////////////

// Static route: fixed path, same behavior every time
router.get("/api/random", (req, res) => {
  const message = returnPassword(["endearments", "dates"]);
  res.json({ message });
});

// Dynamic route: response depends on query params (e.g. ?params=endearments,dates)
router.get("/api/custom", (req, res) => {
  const paramStr = req.query.params || "endearments,dates";
  const params = paramStr.split(",").map((p) => p.trim()).filter(Boolean);
  const message = returnPassword(params);
  res.json({ message });
});

export default router;



function returnPassword(params) {
    let str = "";
    // group 1
    if (params.includes("endearments")) {
        str += randomFromArray(data.endearments);
    }
    if (params.includes("pets")) {
        str += randomFromArray(data.pets);
    }
    if (params.includes("cities")) {
        str += randomFromArray(data.cities);
    }
    // group 2
    if (params.includes("colors")) {
        str += randomFromArray(data.colors);
    }
    if (params.includes("dates")) {
        str += functions.randomYear();
    }
    if (params.includes("patterns")) {
        str += randomFromArray(data.patterns);
    }
    return str;
}

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
