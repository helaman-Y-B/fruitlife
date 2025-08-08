const utilities = require("../utils/utils");
const { getFruits } = require("../models/main-model");

const mainController = {}

/* ************************
 * Constructs the main page
 ************************** */
mainController.getMainPage = async function(req, res) {
    const navBar = await utilities.getNavBar();
    const fruits_for_sale = await getFruits();

    // Check if there is an active session for the user.
    try {
        if (!req.session.user) {
            return res.redirect("/login");
        } else {
            // If the user is logged in, render the main page with their session data.
            return res.render("main", {
                title: "Main Page",
                navBar,
                message: `${req.session.user.name}, welcome to the FruitLife store!`,
                fruits_for_sale: fruits_for_sale.rows, // Ensure we return the rows from the query
            });
        }
    }

    /*const session = req.session.user;
    const message = m => {
        if (m) {
            return `${m.name}, welcome to the FruitLife store!`;
        } else {
            return "Welcome!";
        }
    }*/
    catch (error) {
        console.error("Error retrieving session user:", error);
        return res.status(500).render("error", {
            title: "Error",
            navBar,
            message: "An error occurred while retrieving your session."
        });
    }

    res.render("main", {
        title: "Main Page",
        navBar,
        message: message(session.name),
        fruits_for_sale: fruits_for_sale.rows, // Ensure we return the rows from the query
    })
}

module.exports = mainController;