export default class FuenteInformacionMemoriaNula {
  constructor() {
    this.alphabet = [];
    this.probability = [];
  }

  get getAlphabet() {
    return [...this.alphabet];
  }

  set setAlphabet(alphabet) {
    let l = this.getProbability.length;
    if (typeof alphabet === "boolean") {
      for (let index = 0; index < l; index++)
        this.alphabet.push(`s${index + 1}`);
      return;
    }

    if (l !== this.alphabet.length)
      throw {
        message: `Tienes ${l} probabilidades. Ingresa ${l} simbolos`,
        type: "Entrada invalida",
      };

    this.alphabet = [...alphabet];
  }

  get getProbability() {
    return [...this.probability];
  }

  set setProbability(probability) {
    if (probability.some((value) => value < 0))
      throw {
        message: "Las probabilidades deben ser mayores o iguales a 1",
        type: "Entrada no valida",
      };

    let s = probability.reduce(
      (acumulate, current) => acumulate + current * 100000,
      0
    );

    if (s / 100000 !== 1)
      throw {
        message: "La sumatoria de probabilidades deberia ser 1",
        type: "Entrada no valida",
      };
    this.probability = [...probability];

    if (this.alphabet.length === 0) this.setAlphabet = true;
  }

  entropia(base) {
    if (base <= 0) {
      throw {
        message: "La base debe ser un numero real mayor a 0",
        type: "Entrada no valida",
      };
    }
    return this.getProbability
      .filter((value) => value != 0)
      .reduce(
        (acumulate, current) =>
          acumulate - (current * Math.log(current)) / Math.log(base),
        0
      );
  }
}
