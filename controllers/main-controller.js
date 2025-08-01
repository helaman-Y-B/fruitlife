const utilities = require("../utils/utils");
const { getFruits } = require("../models/main-model");

const mainController = {}

/* ************************
 * Constructs the main page
 ************************** */
mainController.getMainPage = async function(req, res) {
    const navBar = await utilities.getNavBar();
    const fruits_for_sale = await getFruits();

    res.render("main", {
        title: "Main Page",
        navBar,
        message: "Welcome!",
        fruits_for_sale: fruits_for_sale.rows, // Ensure we return the rows from the query
    })
}

module.exports = mainController;