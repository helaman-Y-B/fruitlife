const utilities = require("../utils/utils");

const mainController = {}

/* ************************
 * Constructs the main page
 ************************** */
mainController.getMainPage = async function(req, res) {
    const navBar = utilities.getNavBar();
    res.render("main", {
        title: "Main Page",
        navBar,
    })
}

module.exports = mainController;