export default class MenuModel {
  constructor(lista) {
    this.items = [...lista];
  }

  get getItems() {
    return [...this.items];
  }

  set setItems(items) {
    this.items = [...items];
  }
}
