const fs = require("fs");

let s = fs.readFileSync("./krgz-tr.json", "utf8");
let starling = JSON.parse(s);

let xyz = [];

let a = starling.forEach((k) => {
  xyz.push({
    params: { w: k.name },
  });
});

fs.writeFileSync("starling-params.json", JSON.stringify(xyz, null, 2));
