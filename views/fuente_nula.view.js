export default class FuenteInformacionMemoriaNulaView {
  constructor(controller) {
    this.controller = controller;
    this.renderView = this.renderView.bind(this);
    this.requestView("../views/fuente_nula.html", this.renderView);
  }

  requestView(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState != 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = xhr.responseText;
        callback(data);
      } else {
        callback("Error View Fuente Nula");
      }
    });

    xhr.open("GET", url);
    xhr.send();
  }

  renderView(data) {
    const $main = document.querySelector("main");
    $main.innerHTML = data;
    const $form = document.querySelector("form");
    $form.addEventListener("click", this.controller);
  }
}
