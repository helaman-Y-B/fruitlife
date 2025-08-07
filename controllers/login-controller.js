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
        message: "Please enter your credentials to log in."
    })
}

loginController.logIn = async function (req, res) {
    const { email, password } = req.body;
    const fruits_for_sale = await getFruits();

    const account = await loginModel.signIn(email, password);
    if (!account) {
        const validation = loginValidation.validateLogin(email, password);
        if (!validation.valid) {
            return res.status(400).render("login", {
                title: "Login Page",
                navBar: await utilities.getNavBar(),
                message: validation.message
            });
        }
        return res.status(401).render("login", {
            title: "Login Page",
            navBar: await utilities.getNavBar(),
            message: "Invalid email or password."
        });
    }
    if (account) {

        // Set the session user
        const sessionId = crypto.randomBytes(64).toString("hex");
        
        req.session.user = {
            id: account.account_id,
            email: account.account_email,
            name: account.account_fname,
            type: account.account_type,
            sessionId: sessionId
        };

        console.log("Session user set:", req.session.user); // Check in your terminal

        // Store the session ID in the database if needed
        //await loginModel.storeSessionId(account.id, sessionId);

        res.status(200).render("main", {
            title: "Main Page",
            navBar: await utilities.getNavBar(),
            message: `Welcome back, ${account.account_fname}!`,
            fruits_for_sale: fruits_for_sale.rows // Ensure we return the rows from the query
        });
    }        
}

module.exports = loginController;