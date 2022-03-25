const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// replace articles a, an & the with nothing, note space after articles in regex expression
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

// sort in alphabetical order
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// list sortedbands using original bands array names.
document.querySelector("#bands").innerHTML = sortedBands
  .map((bands) => `<li>${bands}</li>`)
  .join(""); //to join into one big string, not lots of individual strings.

console.log(sortedBands);

/*Notes
The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
By default, the sort() method sorts the values as strings in alphabetical and ascending order.
*/
