const fs = require("fs");

let s = fs.readFileSync("../starling.json", "utf8");
let starling = JSON.parse(s);

console.log(starling);

function replacer(text) {
  let r = text
    .replaceAll("j", "y")
    .replaceAll("č", "ç")
    .replaceAll("š", "ş")
    .replaceAll("ɨ̀", "ı")
    .replaceAll("ɨ", "i")
    .replaceAll("ō", "ou")
    .replaceAll("ŋ", "ng")
    .replaceAll("ɣ", "ğ")
    .replaceAll("ǯ", "c")
    .replaceAll("ž", "j")
    .replaceAll("ā", "aa");

  return r;
}
let xyz = [];

let a = starling.map((k, i) => {
  xyz.push({
    params: { w: i },
  });
  let r = k;
  r.id = i;
  let priorities = ["Turkish", "Turkic", "Proto-Turkic", "Old Turkic"];

  for (let i = 0; i < priorities.length; i++) {
    if (k[priorities[i]]) {
      r.pronounce = r[priorities[i]];
    }
  }

  for (let key in k) {
    if (typeof k[key] === "string") {
      r[key] = replacer(r[key]);
    }
  }

  return r;
});

fs.writeFileSync("starling.json", JSON.stringify(starling, null, 2));
fs.writeFileSync("starling-params.json", JSON.stringify(xyz, null, 2));
