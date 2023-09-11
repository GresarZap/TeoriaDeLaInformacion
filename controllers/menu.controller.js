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
}
