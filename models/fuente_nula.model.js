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
    //si es un boolean, agrega un alphabeto por defecto
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
    //no negativos
    if (probability.some((value) => math.isNegative(value)))
      throw {
        message: "Las probabilidades deben ser mayores o iguales a 0",
        type: "Entrada no valida",
      };

    //suma de probabilidades 1
    let s = probability.reduce(
      (acumulate, current) =>
        math.evaluate(`${acumulate}+${current}`).toString(),
      "0"
    );

    if (s !== "1")
      throw {
        message: "La sumatoria de probabilidades deberia ser 1",
        type: "Entrada no valida",
      };
    this.probability = [...probability];

    //alphabet no definido, creamos uno generico
    if (this.alphabet.length === 0) this.setAlphabet = true;
  }

  entropia(base) {
    if (base <= 0) {
      throw {
        message: "La base debe ser un numero real mayor a 0",
        type: "Entrada no valida",
      };
    }
    return math.round(
      this.getProbability
        .filter((value) => value != "0")
        .reduce(
          (acumulate, current) =>
            math
              .evaluate(
                `${acumulate} - (${current}*log(${current}) / log(${base}))`
              )
              .toString(),
          "0"
        ),
      10
    );
  }

  toHtml(title) {
    let output = `
    <h3>${title}</h3>`;

    let table = `<table>
            <thead>
                <tr>
                    <th>S</th>
                    <th>P</th>
                </tr>
            </thead>
            <tbody>`;

    const a = this.getAlphabet;
    const p = this.getProbability;
    let data = ``;

    for (let index = 0; index < a.length; index++) {
      const element = a[index];
      data += `<tr>
                    <td>${a[index]}</td>
                    <td>${math.round(p[index], 10)}</td>
                </tr>`;
    }

    table += data;
    table += "</tbody>";

    output += table;
    output += "</table>";

    output += `<p>H<sub>2</sub>(S) = ${this.entropia(2)} bit(s)</p>`;

    return output;
  }
}
