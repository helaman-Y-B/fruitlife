const utilities = require("../utils/utils");

const loginController = {}

/* ************************
 * Constructs the login page
 ************************** */

loginController.getLoginPage = async function(req, res) {
    const navBar = await utilities.getNavBar();

    res.render("login", {
        title: "Login Page",
        navBar
    })
}

module.exports = loginController;