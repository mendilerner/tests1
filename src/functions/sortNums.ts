export function sortNums(numberArray: number[]): number[] {
    return numberArray.sort(compareNumbers)
}

function compareNumbers(a: number, b: number) {
    return a - b;
  }