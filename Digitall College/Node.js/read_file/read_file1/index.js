import fs from "fs";
fs.writeFileSync("./log.txt", "Boa Tarde galera!")
// fs.writeFileSync("./log.txt", "e ai?") //sobreescreve a anterior.
fs.appendFileSync("./log.txt", "\nComo estão?") // acrescenta uma nova linha ao lado '\n' antes da string para pular a linha;

const data = fs.readFileSync("./log.txt", "utf-8");

console.log(data)