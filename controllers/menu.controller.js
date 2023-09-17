import FIMNModel from "../models/fuente_nula.model.js";
import FIMNController from "../controllers/fuente_nula.controller.js";
import FIMNView from "../views/fuente_nula.view.js";
import MenuView from "../views/menu.view.js";

export default class MenuController {
  constructor(model) {
    this.model = model;
  }

  get getModelItems() {
    return this.model.getItems;
  }

  handleEvent(e) {
    if (e.target.matches('[class^="hamburger"]')) {
      e.preventDefault();
      this.clickHandleButton();
    }
    if (e.target.matches("menu ul li")) {
      e.preventDefault();
      this.clickHandleItem(e.target.innerText);
    }
  }

  clickHandleButton() {
    this.model.setActive = !this.model.getActive;
    const $menu = document.querySelector("menu");
    const $button = document.querySelector(".hamburger");
    if (this.model.getActive) {
      $menu.classList.add("is-active");
      $button.classList.add("is-active");
    } else {
      $menu.classList.remove("is-active");
      $button.classList.remove("is-active");
    }
  }

  clickHandleItem(selection) {
    this.clickHandleButton();
    switch (selection) {
      case "Fuente de Memoria Nula":
        const model = new FIMNModel();
        const controller = new FIMNController(model);
        const view = new FIMNView(controller);
        break;

      default:
        break;
    }
  }
}
