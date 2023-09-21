import MenuModel from "../../models/menu.model.js";
import MenuController from "../../controllers/menu.controller.js";
import MenuView from "../../views/menu.view.js";

math.config({
  number: "BigNumber",
});

function main() {
  const list = ["Fuente de Memoria Nula", "Fuente de Memoria Nula Extendida"];
  const model = new MenuModel(list);
  const controller = new MenuController(model);
  const view = new MenuView(controller);
}

main();
