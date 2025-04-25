const utilities = require("../utils/utils");

const mainController = {}

mainController.getMainPage = async function(req, res) {
    const navBar = utilities.getNavBar();
    res.render("main", {
        title: "Main Page",
        navBar,
    })
}

module.exports = mainController;