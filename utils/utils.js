const Utils = {};

/* ************************
 * Constructs the nav HTML
 ************************** */
Utils.getNavBar = async function() {
    let nav = "<ul id='navBar'>"
    nav += "<li><img id='nav-arrow' src='/img/nav-arrow.png' alt='arrow'/></li>"
    nav += "<li class='nav'><a href='/'>Home</a></li>"
    nav += "<li class='nav'><a href='/'>Sobre</a></li>"
    nav += "<li class='nav'><a href='/'>Contato</a></li>"
    nav += "<li class='nav'><a href='/'>Frutas</a></li>"
    nav += "</ul>"
    return nav;
}

module.exports = Utils;