const range = require("../range");

describe("range()", () => {
  describe("can create an iterator with one parameter", () => {
    let iter;

    beforeEach(() => {
      iter = range(10);
    });

    it("should be an iterator", () => {
      expect(typeof iter?.[Symbol.iterator] === "function").toBeTruthy();
    });

    it("should start with 0", () => {
      expect(iter.next().value).toBe(0);
    });

    describe("we can create an aray from it", () => {
      it("should contains every element", () => {
        const arr = [...iter];
        expect(arr).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      });
    });
  });

  describe('can add a from and to arguments', () => {
    test('created array contains values between', () => {
      const arr = [...range(1, 5)];
      expect(arr).toStrictEqual([1, 2, 3, 4, 5]);
    })
  })
});
