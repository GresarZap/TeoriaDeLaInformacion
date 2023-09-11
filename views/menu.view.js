export default class MenuView {
  constructor(controller) {
    this.controller = controller;
    this.renderView = this.renderView.bind(this);
    this.renderList = this.renderList.bind(this);
    this.menu = null;
    this.requestView("../views/menu.html", this.renderView);
  }

  set setMenu(menu) {
    this.menu = menu;
  }

  requestView(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState != 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = xhr.responseText;
        callback(data);
      } else {
        callback("Error menu view");
      }
    });

    xhr.open("GET", url);
    xhr.send();
  }

  renderView(data) {
    const $header = document.querySelector("header");
    $header.innerHTML = data;
    this.setMenu = document.querySelector("menu");

    this.menu.addEventListener("click", this.controller);
    this.renderList();
  }

  renderList() {
    const $fragment = document.createDocumentFragment();
    const $ul = document.querySelector("menu ul");
    this.controller.getModelItems.forEach((item) => {
      const $li = document.createElement("li");
      $li.textContent = item;
      $fragment.appendChild($li);
    });

    $ul.appendChild($fragment);
  }

  renderUpdate() {
    const $menu = document.querySelector("menu");
    $menu.classList.toggle(this.controller.getActive);
  }
}
