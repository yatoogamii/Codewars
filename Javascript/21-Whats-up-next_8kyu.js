// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

function nextItem(xs, item) {
  console.log(xs, item);
  if (Array.isArray(xs) ) {
    return xs.find((value) => value == item + 1)
  }
  else if (typeof(xs) == "string" && xs.includes(item)) {
    let indexOfItem = xs.indexOf(item) + 1;
    if (xs.charAt(indexOfItem) == '') {
      return undefined;
    }
    else {
      return xs.charAt(indexOfItem);
    }
  }
  else if (typeof(xs) == 'object' && Array.isArray(xs) == false) {
    let finalItem;
    let found = false;
    for (let value of xs) {

       if (found == true) {
        finalItem = value;
        break;
       }
       if (value == item) {
        found = true;
       }
    }
    return finalItem;
  }
}
