const at = require("../at");

describe("at()", () => {
  const array = [1, 2, 3, 4, 5];

  describe("given positive index", () => {
    describe("lesser than array length", () => {
      it("should return normally", () => {
        expect(at(array, 2)).toBe(3);
      });
    });

    describe("greater than array length", () => {
      it("should return undefined", () => {
        expect(at(array, 10)).toBeUndefined();
      });
    });
  });

  describe("given negative index", () => {
    describe("absolute value lesser than array length", () => {
      it("should return normally", () => {
        expect(at(array, -3)).toBe(3);
      });
    });

    describe("absolute value greater than array length", () => {
      it("should return undefined", () => {
        expect(at(array, -10)).toBeUndefined();
      });
    });
  });

  test("given -1 should get the last element", () => {
    expect(at(array, -1)).toBe(5);
  });

  test("given 0 should get the first element", () => {
    expect(at(array, 0)).toBe(1);
  });
});
