import FMN from "./fuente_nula.model.js";

export default class FuenteInformacionMemoriaNulaExtendida extends FMN {
  constructor() {
    super();
  }

  fuenteExtendida(n) {
    const p = [];
    let simbolos = Array(this.getProbability.length);
    simbolos.fill(0);
    simbolos = simbolos.map((_, index) => index + 1);
    //obtenemos los indices que se usaran para la nueva fuente
    const indexes = this.permutacionesConRepeticion(simbolos, n);

    const fme = new FMN();
    let probabilities = [];
    let symbols = [];
    const pa = this.getProbability;

    indexes.forEach((element) => {
      let prob = 1;
      let symb = "";
      element.forEach((index) => {
        prob = (prob * (pa[index - 1] * 10000000)) / 10000000;
        symb += `s${index}`;
      });
      symbols.push(symb);
      probabilities.push(prob);
    });

    fme.setProbability = probabilities;
    fme.setAlphabet = symbols;

    return fme;
  }

  permutacionesConRepeticion(elementos, longitud) {
    if (longitud === 1) return elementos.map((elemento) => [elemento]);

    const result = [];

    elementos.forEach((element) => {
      const subPermutacion = this.permutacionesConRepeticion(
        elementos,
        longitud - 1
      );
      subPermutacion.forEach((subElement) => {
        result.push([element, ...subElement]);
      });
    });

    return result;
  }
}
