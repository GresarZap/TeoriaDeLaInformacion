import MenuModel from "../../models/menu.model.js";
import MenuController from "../../controllers/menu.controller.js";
import MenuView from "../../views/menu.view.js";

function main() {
  const list = ["Fuente de Memoria Nula"];
  const model = new MenuModel(list);
  const controller = new MenuController(model);
  const view = new MenuView(controller);
}

main();
