import * as header from '../components/_header/header.js'
import changeBurger from '../components/burger/burger.js'
import * as catalog from "../components/app-catalog/catalog.js";
import showModal from "../components/app-overlay/overlay.js";

window.addEventListener('load', () => {
    header.changeDatalist();
    changeBurger();
    catalog.openCatalogMenu();
    catalog.openCatalogSubMenu();
    catalog.openCatalogSecondMenu();
    showModal();
});