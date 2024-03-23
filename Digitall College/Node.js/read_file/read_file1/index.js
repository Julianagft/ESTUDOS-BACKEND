import fs from "fs";
fs.writeFileSync("./log.txt", "Boa Tarde galera!")
// fs.writeFileSync("./log.txt", "e ai?") //sobreescreve a anterior.
fs.appendFileSync("./log.txt", "\nComo estão?")

const data = fs.readFileSync("./log.txt", "utf-8");

console.log(data)