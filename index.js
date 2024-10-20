// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/db/db");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "https://stone-paper-scissors-29.netlify.app/", // Allow only your frontend
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};
dotenv.config();

connectDB();

const app = express();
app.use(cors(corsOptions));
app.use(morgan("dev")); // Logs requests in the development format

app.use(bodyParser.json());

app.use("/api/games", require("./src/routes/gameRoutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
