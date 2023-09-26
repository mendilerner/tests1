import { expect, test, describe } from "vitest";
import { sumArray } from "../functions/sumArray";

describe("sumArray", () => {
    const myArr = [4,6,1,3]
    test("return the str length", () => {
        expect(sumArray(myArr)).toBe(14);
      });
      test("return the str length", () => {
        expect(sumArray(myArr)).toBeGreaterThan(12);
      });
});
