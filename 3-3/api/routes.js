// import express, create router
import express from 'express';
const router = express.Router();
// import data for the API
import { data, functions } from "./data.js";
// console.log(data.pets);

router.get("/api", async function (req, res) {
    res.send({"message": "Hello, World!"});
});

router.get("/api/common", async function (req, res) {
  res.send({ "message": functions.randomFromArray(data.common) });
});


export default router;