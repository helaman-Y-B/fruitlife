const utilities = require("../utils/utils");
const loginModel = require("../models/login-model");
const { getFruits } = require("../models/main-model");
const loginValidation = require("../utils/inputValidation");

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
        res.status(200).render("main", {
            title: "Main Page",
            navBar: await utilities.getNavBar(),
            message: `Welcome back, ${account}!`,
            fruits_for_sale: fruits_for_sale.rows // Ensure we return the rows from the query
        });
    }        
}

module.exports = loginController;