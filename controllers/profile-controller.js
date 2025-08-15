const utilities = require("../utils/utils");
const editProfileModel = require("../models/edit-profile-model");

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

profileController.profilePicture = async function(req, res) {
    try {
        const user = req.session.user;
        const filePath = `img/profile-pictures/${req.file.filename}`;

        await editProfileModel.updateProfilePicture(user.account_id, filePath);

        res.redirect("/profile");

    } catch (error) {
        console.error("Error updating profile picture:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = profileController;