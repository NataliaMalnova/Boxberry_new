import * as header from '../components/_header/header.js'
import changeBurger from '../components/burger/burger.js'
import openCatalogMenu from "../components/app-catalog/catalog.js";


window.addEventListener('load', () => {
    header.changeDatalist();
    changeBurger();
    openCatalogMenu();
});