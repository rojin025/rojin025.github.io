import { assert } from "chai";

import { sumDigit } from "../src/sumDigits.js"; // ts is switched to js

describe("sumDigits returns total sum of each digits", function () {
  it("123 returns 6", function () {
    assert.strictEqual(sumDigit(123), 6);
  });

  it("102 returns 3", function () {
    assert.strictEqual(sumDigit(102), 3);
  });

  it("3 returns 3", function () {
    assert.strictEqual(sumDigit(3), 3);
  });
});
