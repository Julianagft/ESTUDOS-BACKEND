import fs from "fs";
import {Pessoa} from "./Pessoa.js"

const data = fs.readFileSync("./package.json", "utf-8");
const obj = JSON.parse(data)

console.log(typeof obj);
console.log(obj.name);

const aluno = {
    nome: "Juliana Rodrigues",
    matricula: 12232,
    ativo: true
}

const pessoa = new Pessoa("Ronnier", 25)



const jsonAluno = JSON.stringify(aluno);
const dataAluno = fs.writeFileSync("./Pessoa.json", JSON.stringify(pessoa));
