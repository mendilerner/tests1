import {test, expect, describe} from 'vitest'
import { fetchUserData } from '../functions/fetchUserData'


describe("fetchUserData", () => {
    test("fetch user and get result", async () => {
        expect( await fetchUserData(3)).toHaveProperty('email', 'Nathan@yesenia.net')
    })
    test("fetch user and get result", async () => {
        await expect(() => fetchUserData(45)).rejects.toThrowError('the id is not valid')
    })
})