const Utils = {};

/* ************************
 * Constructs the nav HTML
 ************************** */
Utils.getNavBar = async function() {
    let nav = "<ul id='navBar'>"
    nav += "<li><a href='/'>Home</a></li>"
    nav += "<li><a href='/'>Sobre</a></li>"
    nav += "<li><a href='/'>Contato</a></li>"
    nav += "<li><a href='/'>Frutas</a></li>"
    nav += "</ul>"
    return nav;
}

module.exports = Utils;