const utilities = require("../utils/utils");
const registerModels = require("../models/register-model");

const registerController = {}

/* ************************
 * Constructs the register page
 ************************** */

registerController.getregisterPage = async function(req, res) {
    const navBar = await utilities.getNavBar();

    res.render("register", {
        title: "Sing up page",
        navBar
    })
}

registerController.registerAccount = async function(req, res) {
    const { fname, lname, email, password } = req.body;

    // Validate input
    if (!fname || !lname || !email || !password) {
        return res.status(400).send("All fields are required.");
    } else {
        // Call the model to register the account
        const isRegistered = await registerModels.registerAccount(fname, lname, email, password);
        if (isRegistered) {
            res.status(201).send("Account registered successfully.");
        } else {
            res.status(400).send("Username already exists.");
        }
    }
}

module.exports = registerController;