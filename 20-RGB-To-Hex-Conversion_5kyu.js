// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){

  if (Number(r) >= 255) {
   r = "FF";
  }
  if (Number(g) >= 255) {
   g = "FF";
  }
  if (Number(b) >= 255) {
   b = "FF";
  }
  if (r <= 0) {
    r = "00";
  }
  if (g <= 0) {
    g = "00";
  }
  if (b <= 0) {
    b = "00";
  }
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length < 2) {
       r = "0" + r;
  }
   if (g.length < 2) {
       g = "0" + g;
  }
  if (b.length < 2) {
       b = "0" + b;
  }
  let rgb = r + g + b;

  return rgb.toUpperCase();
}
