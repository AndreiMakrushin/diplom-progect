import modal from "./modules/modal";
import anchorLink from "./modules/anchorLink"
import slider from "./modules/slider"
import smooth from "./modules/smooth"
import accordeon from "./modules/accordion"
import sendFrom from "./modules/sendForm"
import validate from "./modules/validate"
modal();
anchorLink();
slider();
smooth();
accordeon();
sendFrom({idForm: 'form1'});
validate();