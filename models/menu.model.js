export default class MenuModel {
  constructor(lista) {
    this.items = [...lista];
    this.active = true;
  }

  get getItems() {
    return [...this.items];
  }

  set setItems(items) {
    this.items = [...items];
  }

  get getActive() {
    return this.active;
  }

  set setActive(active) {
    this.active = active;
  }
}
