import FIMNE from "../models/fuente_nula_extendida.model.js";
import FIMN from "../models/fuente_nula.model.js";

export default class FuenteInformacionMemoriaNulaExtendidaController {
  constructor(model) {
    this.model = model;
  }

  handleEvent(e) {
    if (e.target.matches("#send")) {
      e.preventDefault();
      this.clickEvent();
    }
  }

  clickEvent() {
    console.log("click fuente nula extendida");

    let er = /(-{0,1}[0-1].[0-9]*),*\s{0,1}/g;
    let er2 = /(0-9)+/g;
    const $input = document.querySelector("#probabilities");
    const $message = document.querySelector("p#probabilities");
    const $solution = document.querySelector("#solution");
    const input = $input.value;
    const $inputExtension = document.querySelector("#extension");
    let inputExtension = $inputExtension.value;

    if (!er.test(input)) {
      $message.innerText = "Recuerda ingresar en el formato indicado.";
    } else {
      if (!er2.test(inputExtension)) {
        $message.innerText = "";

        //extrayendo probabilidades del input
        er = /(-{0,1}[0-1].[0-9]*),*\s{0,1}/g;
        let probability = er.exec(input);
        const probabilities = [];

        while (probability) {
          // probabilities.push(Number.parseFloat(probability[1]));
          probabilities.push(probability[1]);
          probability = er.exec(input);
        }

        //extrayendo extension del input
        inputExtension = Number.parseInt(inputExtension);

        console.log(probabilities);
        console.log(typeof inputExtension);

        try {
          const f1 = new FIMNE();
          f1.setProbability = probabilities;
          const f2 = f1.fuenteExtendida(inputExtension);

          $solution.innerHTML = f2.toHtml("Solucion");
          $solution.classList.remove("hidden");
          $solution.scrollIntoView({ behavior: "smooth" });
        } catch (err) {
          $message.innerText = err.message;
        }
      }
    }
  }
}
