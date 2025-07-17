// server.js is responsable to control the project.

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config();
const static = require("./routes/static")
const mainRoute = require("./routes/main")
const loginRoute = require("./routes/login")
const pool = require("./sql/server-connection")
const session = require("express-session")

// Creates the app instance
const app = express();

/* ***********************
 * Middleware
 * ************************/
app.use(session({
    store: new (require("connect-pg-simple")(session))({
        createTableIfMissing: true,
        pool,
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    name: "session",
}));

// Express messages middleware
app.use(require("connect-flash")());
app.use(function(req, res, next){
    res.locals.messages = require("express-messages")(req, res);
    next();
});

/* ***********************
 * View engine and template
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Routes
 *************************/
// Login page route
app.use("/login", loginRoute);

// Static route
app.use(static);
app.use(express.static("public"));

// Main page route
app.use("/", mainRoute)

// .env items
const port = process.env.PORT; 
const host = process.env.HOST;

// Listens to the port and host
app.listen(port, () => {
    console.log(`Server is listening on port ${port} and host ${host}`);
});

