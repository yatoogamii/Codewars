// implified number to money converter.

// Note:

//     truncate to 2 decimal places
//     don't keep trailing zeros
//     input will be a positive number with at least two trailing digits

// Examples:

// 2546.2562 --> '2,546.25'

// 1500.342626 --> '1,500.34'

// 100.2134 --> '100.21'

// Taken from 'Formatting a number as price' (Kyu 5)
//

var numberToMoney = function(n) {
  n = n.toString();

  if (n === '0') {
    return n.split('').join('');
  } else {

    let dotIndex = n.indexOf(".");

    if (n.includes(".")) {
      n *= 100;
      n = (Math.trunc(n) / 100);
      n = n.toFixed(2);
      n = n.split('');

      while (n[n.length - 1] == 0 || n[n.length - 1] == ".") {
        n.splice(-1, 1);
      };
    }

    if (n[dotIndex - 4]) {
      n.splice((dotIndex - 3), 0, ",")
    }
    else if (n[dotIndex - 7]) {
      n.splice((dotIndex - 6), 0, ",")
    }
    else if (n.indexOf(".") == -1 && n.length >= 4) {
      n.splice(-3, 0, ",");
    }
    return n.join("");
  }
}
