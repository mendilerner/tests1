import { expect, test, describe } from "vitest";
import { nextFibonacci } from "../functions/nextfibonachi";

describe("sumArray", () => {
    const myArr = [1,1,2,3,5]
    const newArr = [1]
    const thirdArr = [1,1,2,4,9]
    test("array is fibonacci", () => {
        expect(nextFibonacci(myArr)).toBe(8);
      });
      test("array is too short", () => {
        expect(() => nextFibonacci(newArr)).toThrowError('the array is too short');
      });
      test("array is not fibonacci", () => {
        expect(() => nextFibonacci(thirdArr)).toThrowError('the array is not fibonacci');
      });

    })