import {test, expect, describe} from 'vitest'
import { isPalindrome } from '../functions/isPolindrom'


describe("isPalindrome", () => {
    test("is palindrom tobe true", () => {
        expect(isPalindrome('aabbaa')).toBe(true)
    })
    test("is palindrom tobe false", () => {
        expect(isPalindrome("aabas")).toBe(false)
    })
    test("is palindrom tobe false", () => {
        expect(isPalindrome("")).toBe(false)
    })
})