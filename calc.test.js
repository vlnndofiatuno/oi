// calculadora.test.js

const {
    somar,
    subtrair,
    multiplicar,
    dividir,
    potencia,
    media,
    porcentagem,
  } = require('./calculadora');
  
  describe('Funções da calculadora', () => {
    // --------- SOMAR ---------
    test('somar dois números positivos', () => {
      expect(somar(2, 3)).toBe(5);
    });
  
    test('somar número positivo com negativo', () => {
      expect(somar(10, -5)).toBe(5);
    });
  
    // --------- SUBTRAIR ---------
    test('subtrair dois números', () => {
      expect(subtrair(10, 4)).toBe(6);
    });
  
    // --------- MULTIPLICAR ---------
    test('multiplicar dois números', () => {
      expect(multiplicar(3, 5)).toBe(15);
    });
  
    test('multiplicar por zero', () => {
      expect(multiplicar(7, 0)).toBe(0);
    });
  
    // --------- DIVIDIR ---------
    test('dividir dois números', () => {
      expect(dividir(10, 2)).toBe(5);
    });
  
    test('lançar erro ao dividir por zero', () => {
      expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida');
    });
  
    // --------- POTÊNCIA ---------
    test('potência com expoente positivo', () => {
      expect(potencia(2, 3)).toBe(8);
    });
  
    test('potência com expoente zero', () => {
      expect(potencia(5, 0)).toBe(1);
    });
  
    // --------- MÉDIA ---------
    test('calcular média de vários números', () => {
      const numeros = [2, 4, 6, 8];
      expect(media(numeros)).toBe(5);
    });
  
    test('calcular média com números negativos', () => {
      const numeros = [-2, -4, -6];
      expect(media(numeros)).toBe(-4);
    });
  
    test('lançar erro ao calcular média de array vazio', () => {
      expect(() => media([])).toThrow('A lista de números deve ter pelo menos um valor');
    });
  
    test('lançar erro se parâmetro de média não for array', () => {
      expect(() => media(10)).toThrow('A lista de números deve ter pelo menos um valor');
    });
  
    // --------- PORCENTAGEM ---------
    test('calcular porcentagem de um valor (10% de 200 = 20)', () => {
      expect(porcentagem(200, 10)).toBe(20);
    });
  
    test('calcular porcentagem de um valor (25% de 80 = 20)', () => {
      expect(porcentagem(80, 25)).toBe(20);
    });
  });
  