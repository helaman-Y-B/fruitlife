const utilities = require("../utils/utils");
const registerModels = require("../models/register-model");
const { title } = require("process");
const registerValidation = require("../utils/inputValidation");
const bcrypt = require("bcrypt");

const registerController = {}

/* ************************
 * Constructs the register page
 ************************** */

registerController.getregisterPage = async function(req, res) {
    const navBar = await utilities.getNavBar();

    res.render("register", {
        title: "Sing up page",
        navBar,
        user: req.session.user,
        message: "Create your account to start using our services."
    })
}

registerController.registerAccount = async function(req, res) {
    const { fname, lname, email, password } = req.body;
    //console.log("Registering account with:", { fname, lname, email, password });

    const validation = registerValidation.validateRegister(fname, lname, email, password);
    if (!validation.valid) {
        return res.status(400).render("register", {
            title: "Register Page",
            navBar: await utilities.getNavBar(),
            user: req.session.user,
            message: validation.message
        });
    }

    // Validate if a field is empyt
    else if (!fname || !lname || !email || !password) {
        return res.status(400).send("All fields are required.");

    } else {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Call the model to register the account
        const isRegistered = await registerModels.registerAccount(fname, lname, email, hashedPassword);
            
        if (!isRegistered == false) {
            // Just discovered that we can't use redirect and render at the same time since it will cause an error
            // So we will just render the login page after registration

            //res.redirect("/login");
            
            //window.location.pathname = "/login";
            res.status(201).redirect("login");
            //res.render("login", {
            //    title: "Login Page",
            //    navBar: await utilities.getNavBar(),
            //    message: "Account created successfully! Please log in."
            //});
        } else {
            console.log("Username already exists");
            // Redirect back to the register page with an error message
            res.render("register", {
                title: "Sing up page",
                navBar: await utilities.getNavBar(),
                user: req.session.user,
                message: "Username already exists"
            })
        }
    }
}

module.exports = registerController;