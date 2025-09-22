const { sum } = require("./22-testing.js");
const { isEven } = require("./23-testing-exercises.js");

test("Suma de 3+5 tiene que ser 8", () => {
  expect(sum(3, 5)).toBe(8);
});

test("2 es un número par", () => {
  expect(isEven(2)).toBe(true);
});

test("3 no es un número par", () => {
  expect(isEven(3)).toBe(false);
});
