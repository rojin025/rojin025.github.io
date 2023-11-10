export const calculator = {
  operand1: 0,
  operand2: 0,
  setValues(operand1: number, operand2: number): void {
    this.operand1 = operand1;
    this.operand2 = operand2;
  },
  sum() {
    return this.operand1 + this.operand2;
  },
  mul() {
    return this.operand1 * this.operand2;
  },
};
