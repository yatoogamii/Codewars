// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  var vowelsCount = 0;

  let pos = {
   A : str.indexOf("a"),
   E : str.indexOf("e"),
   I : str.indexOf("i"),
   O : str.indexOf("o"),
   U : str.indexOf("u")
   }

   while ( pos.A != -1 ) {
   vowelsCount++;
   pos.A = str.indexOf( "a", pos.A + 1 );
   }
   while ( pos.E != -1 ) {
   vowelsCount++;
   pos.E = str.indexOf( "e", pos.E + 1 );
   }
   while ( pos.I != -1 ) {
   vowelsCount++;
   pos.I = str.indexOf( "i", pos.I + 1 );
   }
   while ( pos.O != -1 ) {
   vowelsCount++;
   pos.O = str.indexOf( "o", pos.O + 1 );
   }
   while ( pos.U != -1 ) {
   vowelsCount++;
   pos.U = str.indexOf( "u", pos.U + 1 );
   }
  return vowelsCount;
}
