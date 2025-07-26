const utilities = require("../utils/utils");

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

module.exports = registerController;