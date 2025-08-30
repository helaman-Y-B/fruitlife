const utilities = require("../utils/utils");
const profileModel = require("../models/edit-profile-model");
const fs = require("fs");
const path = require("path");

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

        const oldImg = await profileModel.getUsersImg(user);

        // Delete the old image if it's not NULL
        if (oldImg && oldImg !== "/img/profile-pictures/standard.jpeg") {
            const oldImgPath = path.join( "/workspaces/fruitlife/", "public/", oldImg);
            fs.unlink(oldImgPath, (error) => {
                if (error) {
                    console.error("Erro ao deletar a imagem antiga:", error);
                } else {
                    console.log("Imagem antiga deletada com sucesso.");
                }
            })
        }

        const filePath = `img/profile-pictures/${req.file.filename}`;

        //console.log("File path:", filePath);

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