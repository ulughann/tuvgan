const fs = require("fs");

let s = fs.readFileSync("../../pages/starling/starling-data.json", "utf8");
let starling = JSON.parse(s);

// If you've installed from GitHub, do:
const translate = require('google-translate');
function translate(s) {
  translate(s, {from: 'en', to: 'tr'}).then(console.log).catch(console.error);
}