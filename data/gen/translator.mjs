import { readFileSync } from "fs";

let s = readFileSync("./starling.json", "utf8");
let starling = JSON.parse(s);

const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "cat",
		source: "en",
		target: "tr",
		format: "text",
		alternatives: 3,
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());

// starling.map((k, i) => {
//   let meaning = k.meaning;

//   k["Turkish Meaning"] = translates(meaning);
//   console.log(k["Turkish Meaning"]);
//   return k;
// });

// fs.write("starling-a.json", JSON.stringify(starling, null, 2));
