import numberCruncher from './../../src/modules/calculation/numberCruncher';

describe('numberCruncher', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add two numbers when operator is "add"', () => {
    const calc = { numOne: '10', numTwo: '5', operator: 'add' };
    expect(numberCruncher(calc)).toBe(15);
  });

  it('should subtract two numbers when operator is "subtract"', () => {
    const calc = { numOne: '10', numTwo: '5', operator: 'subtract' };
    expect(numberCruncher(calc)).toBe(5);
  });

  it('should multiply two numbers when operator is "multiply"', () => {
    const calc = { numOne: '10', numTwo: '5', operator: 'multiply' };
    expect(numberCruncher(calc)).toBe(50);
  });

  it('should divide two numbers when operator is "divide"', () => {
    const calc = { numOne: '10', numTwo: '5', operator: 'divide' };
    expect(numberCruncher(calc)).toBe(2);
  });

  it('should call percentage function when operator is "percentage"', () => {
    const calc = { numOne: '5', numTwo: '10', operator: 'percentage' };
    
    expect(numberCruncher(calc)).toBe(50);
  });

  it('should call exp function when operator is "exponent"', () => {
    const calc = { numOne: '2', numTwo: '3', operator: 'exponent' };
    
    expect(numberCruncher(calc)).toBe(8);
  });

  it('should call gcd function when operator is "gcd"', () => {
    const calc = { numOne: '10', numTwo: '5', operator: 'gcd' };
    
    expect(numberCruncher(calc)).toBe(5);
  });
});
