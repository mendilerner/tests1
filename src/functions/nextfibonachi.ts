export function nextFibonacci(numsArray: number[]): number | undefined {
  const len = numsArray.length;
  if (len <= 1) throw new Error("the array is too short");
  if (numsArray[0] === 1 && numsArray[1] === 1) {
    if (len === 2) return 2;
    for (let i = 2; i < len; i++) {
      if (numsArray[i - 2] + numsArray[i - 1] !== numsArray[i]) {
        throw new Error("the array is not fibonacci");
      }
    }
    return numsArray[len - 1] + numsArray[len - 2];
  }
  throw new Error("the array is not fibonacci");
}
