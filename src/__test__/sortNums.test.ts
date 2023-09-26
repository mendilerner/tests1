import {test, expect, describe} from 'vitest'
import { sortNums } from '../functions/sortNums'


describe("isPalindrome", () => {
    const arr = [3,5,7,2,0]
    const arr2 = [0,0,0,0,0]
    test('sort ascending numbers', () => {
        expect(sortNums(arr)).toEqual([0,2,3,5,7])
    })
    test('sort ascending numbers', () => {
        expect(sortNums(arr2)).toEqual([0,0,0,0,0])
    })
})