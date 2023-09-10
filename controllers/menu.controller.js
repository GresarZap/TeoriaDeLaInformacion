export default class MenuController {
  constructor(model) {
    this.model = model;
  }

  get getModelItems() {
    return this.model.getModelItems;
  }

  handleEvent(e) {}
}
