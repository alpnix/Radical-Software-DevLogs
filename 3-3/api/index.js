//////////////////////////////////////
/////////////// SERVER ///////////////
//////////////////////////////////////

// create express server
import express from "express";
const app = express();
const port = 3000;

// Static files and frontend
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// allow access to all 
import cors from 'cors';
app.use(cors());

// add a separate file for routes
import router from './routes.js';
app.use('/', router);

// start server
app.listen(port, () => console.log(`Your app is listening at: http://localhost:${port}.`));

// export app for vercel
export default app;