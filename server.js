// server.js is responsable to control the project.

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config();
const static = require("./routes/static")
const mainRoute = require("./routes/main")

// Creates the app instance
const app = express();

/* ***********************
 * View engine and template
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Routes
 *************************/
// Main page route
app.use("/", mainRoute)

// Static route
app.use(static);
app.use(express.static("public"));

// .env items
const port = process.env.PORT; 
const host = process.env.HOST;

// Listens to the port and host
app.listen(port, () => {
    console.log(`Server is listening on port ${port} and host ${host}`);
});

