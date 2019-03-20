// Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

function sumR(x) {
 return x <= 1 ? +x : x.pop() + sumR(x);
}
