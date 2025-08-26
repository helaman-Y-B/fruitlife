const utilities = require("../utils/utils");
const profileModel = require("../models/edit-profile-model");

const profileController = {}

/* ************************
 * Constructs the profile page
 ************************** */

profileController.getProfilePage = async function(req, res) {
    const navBar = await utilities.getNavBar();

    const usersImg = await profileModel.getUsersImg(req.session.user.id);

    res.render("profile", {
        title: "Profile Page",
        navBar,
        user: req.session.user,
        profilePicture: usersImg
    })
}

profileController.profilePicture = async function(req, res) {
    try {
        const navBar = await utilities.getNavBar();
        const user = req.session.user.id;
        if (!req.file) {
            console.log("Selecione uma imagem para o perfil.");
            return res.redirect("/profile");
        };

        const filePath = `img/profile-pictures/${req.file.filename}.jpeg`;

        console.log("File path:", filePath);

        await profileModel.updateProfilePicture(user, filePath);

        const usersImg = await profileModel.getUsersImg(user);

        res.render("profile", {
            title: "Profile Page",
            navBar,
            user: req.session.user,
            profilePicture: usersImg,
        })

    } catch (error) {
        console.error("Error updating profile picture:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = profileController;