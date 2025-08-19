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
        if (!req.file) {
            alert("Selecione uma imagem para o perfil.");
            return res.redirect("/profile");
        };

        const filePath = `img/profile-pictures/${req.file.filename}`;

        console.log("File path:", filePath);

        await editProfileModel.updateProfilePicture(user.account_id, filePath);
        alert("Foto de perfil atualizada com sucesso!");

        res.redirect("/profile");

    } catch (error) {
        console.error("Error updating profile picture:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = profileController;