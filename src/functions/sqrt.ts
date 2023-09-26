export function sqrt (num: number) {
    if(num < 0) throw new Error('negative number cant have a square root') 
    return Math.sqrt(num)
}