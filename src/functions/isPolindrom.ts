export function isPalindrome(str: string): boolean {
    if (str.length === 0) return false
  const reversedStr = Array.from(str).reverse().join("");
  return str === reversedStr;
}
