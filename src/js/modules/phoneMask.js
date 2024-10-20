import Inputmask from "inputmask";

function phoneMask () {

    const selector = document.getElementById("user-phone");
    const im = new Inputmask("+7-(999)-999-99-99");
    im.mask(selector);
};

export default phoneMask;
