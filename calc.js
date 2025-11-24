// calculadora.js

/**
 * Soma dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function somar(a, b) {
    return a + b;
  }
  
  /**
   * Subtrai b de a.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function subtrair(a, b) {
    return a - b;
  }
  
  /**
   * Multiplica dois números.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function multiplicar(a, b) {
    return a * b;
  }
  
  /**
   * Divide a por b.
   * Lança erro se tentar dividir por zero.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function dividir(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
  }
  
  /**
   * Calcula a potência: base ^ expoente.
   * @param {number} base
   * @param {number} expoente
   * @returns {number}
   */
  function potencia(base, expoente) {
    return Math.pow(base, expoente);
  }
  
  /**
   * Calcula a média de uma lista de números.
   * Lança erro se o array for vazio ou não for array.
   * @param {number[]} numeros
   * @returns {number}
   */
  function media(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error('A lista de números deve ter pelo menos um valor');
    }
  
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
    return soma / numeros.length;
  }
  
  /**
   * Calcula a porcentagem de um valor.
   * Ex: porcentagem(200, 10) => 20 (10% de 200)
   * @param {number} valor
   * @param {number} percentual
   * @returns {number}
   */
  function porcentagem(valor, percentual) {
    return (valor * percentual) / 100;
  }
  
  module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    potencia,
    media,
    porcentagem,
  };
  