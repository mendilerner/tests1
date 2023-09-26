import {test, expect, describe} from 'vitest'
import { sqrt } from '../functions/sqrt'


describe("sqrt", () => {
    test('sqrt for positive number', () => {
        expect(sqrt(64)).toEqual(8)
    })
    test('sqrt for negative number', () => {
        expect(() => sqrt(-5)).toThrowError(/^negative number cant have a square root$/)
    })
})