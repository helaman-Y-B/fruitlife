const utilities = require("../utils/utils");

const profileController = {}

/* ************************
 * Constructs the profile page
 ************************** */

profileController.getProfilePage = async function(req, res) {
    const navBar = await utilities.getNavBar();
    res.render("profile", {
        title: "Profile Page",
        navBar,
        user: req.session.user,
    })
}

module.exports = profileController;