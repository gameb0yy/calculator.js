/* 
            _            _       _             
   ___ __ _| | ___ _   _| | __ _| |_ ___  _ __ 
  / __/ _` | |/ __| | | | |/ _` | __/ _ \| '__|
 | (_| (_| | | (__| |_| | | (_| | || (_) | |   
  \___\__,_|_|\___|\__,_|_|\__,_|\__\___/|_|   
                                               
*/

class Calculator {
  constructor() {
    this.total = 0;
  }

  add(value) {
    this.total += value;
    return this;
  }

  subtract(value) {
    this.total -= value;
    return this;
  }

  multiply(value) {
    this.total *= value;
    return this;
  }

  divide(value) {
    this.total /= value;
    return this;
  }

  power(value) {
    this.total **= value;
    return this;
  }

  exponent(value) {
    this.total = Math.exp(value);
    return this;
  }

  modulo(value) {
    this.total %= value;
    return this;
  }

  getTotal() {
    return this.total;
  }
}

export default Calculator;
