var submittedNames = "Brandon Roffis, Yates Spearman, Carson Demareon, Katherine Macnab, Brad Bell";
var namesArray = submittedNames.split(", ");
namesArray.sort();
console.log(namesArray);
function compare (a,b) {
    var aName = a.split(" ");
  var bName = b.split(" ");

  var aLastName = aName[aName.length - 1];
  var bLastName = bName[bName.length - 1];

  if (aLastName < bLastName) return -1;
  if (aLastName > bLastName) return 1;
  return 0;
}
namesArray.sort(compare);

console.log(namesArray);

document.getElementById("sortedNames").innerHTML = namesArray;