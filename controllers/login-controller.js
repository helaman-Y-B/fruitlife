const utilities = require("../utils/utils");
const loginModel = require("../models/login-model");
const { getFruits } = require("../models/main-model");
const loginValidation = require("../utils/inputValidation");
const crypto = require("crypto");

const loginController = {}

/* ************************
 * Constructs the login page
 ************************** */

loginController.getLoginPage = async function(req, res) {
    const navBar = await utilities.getNavBar();
    res.render("login", {
        title: "Login Page",
        navBar,
        user: req.session.user,
        message: "Please enter your credentials to log in."
    })
}

/* ************************
 * Handles user Login
 ************************** */

loginController.logIn = async function (req, res) {

    // Gets the email and password from the request body
    const { email, password } = req.body;
    const fruits_for_sale = await getFruits();

    // Check if the email and password are provided
    const account = await loginModel.signIn(email, password);

    // If the user is already logged in, redirect to the main page
    if (req.session.user) {
        return res.status(200).render("main", {
            title: "Main Page",
            navBar: await utilities.getNavBar(),
            user: req.session.user,
            message: `Welcome back, ${req.session.user.name}!`,
            fruits_for_sale: (await getFruits()).rows // Ensure we return the rows from the query
        });
    }

    // If the user and account is not found or the password is incorrect, return an error
    else if (!account) {

        // Validate the email and password format
        const validation = loginValidation.validateLogin(email, password);
        if (!validation.valid) {
            return res.status(400).render("login", {
                title: "Login Page",
                navBar: await utilities.getNavBar(),
                user: req.session.user,
                message: validation.message
            });
        }
        return res.status(401).render("login", {
            title: "Login Page",
            navBar: await utilities.getNavBar(),
            user: req.session.user,
            message: "Invalid email or password."
        });
    }

    // If the user is found and the password is correct, set the session user
    else if (account) {

        // Set the session user
        const sessionId = crypto.randomBytes(64).toString("hex");
        
        req.session.sessionId = sessionId; // Store the session ID in the session
        req.session.user = {
            id: account.account_id,
            email: account.account_email,
            name: account.account_fname,
            type: account.account_type,
        };

        //console.log("Session user set:", req.session.user); // Check in your terminal

        res.status(200).render("main", {
            title: "Main Page",
            navBar: await utilities.getNavBar(),
            user: req.session.user,
            message: `Welcome back, ${account.account_fname}!`,
            fruits_for_sale: fruits_for_sale.rows // Ensure we return the rows from the query
        });
    }        
}

module.exports = loginController;