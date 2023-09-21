import FIMN from "../models/fuente_nula.model.js";

export default class FuenteInformacionMemoriaNulaController {
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
    console.log("click fuente nula");
    let er = /(-{0,1}[0-1].[0-9]*),*\s{0,1}/g;
    const $input = document.querySelector("#probabilities");
    const $message = document.querySelector("p#probabilities");
    const $solution = document.querySelector("#solution");
    const input = $input.value;
    if (!er.test(input)) {
      $message.innerText = "Recuerda ingresar en el formato indicado.";
    } else {
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

      console.log(probabilities);

      try {
        const f1 = new FIMN();
        f1.setProbability = probabilities;
        $solution.innerHTML = f1.toHtml("Solucion");
        $solution.classList.remove("hidden");
        $solution.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
        $message.innerText = err.message;
      }
    }
  }
}
