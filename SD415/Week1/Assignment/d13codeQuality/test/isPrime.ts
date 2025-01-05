//Testing using mocha (Test done in same file)

import { assert } from "chai";

function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

describe("isPrime returns true if an argument id prime", function () {
  it("7 is prime", function () {
    assert.strictEqual(isPrime(7), true);
  });

  it("77 is not prime", function () {
    assert.strictEqual(isPrime(77), false);
  });

  it("1 is not prime", function () {
    assert.strictEqual(isPrime(1), false);
  });
});
