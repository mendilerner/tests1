import {expect, test} from 'vitest'
import { strLength } from '../functions/strLength'

test("return the str length", () => {
    expect(strLength("abcd")).toBe(4)
})