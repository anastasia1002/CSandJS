import prompt from "prompt-sync";
const read = prompt()
import Example from "./class";
console.log("Enter your name");

let name=read();
console.log('Hello world ${name}');
let ex1= new Example();
console.log(ex1.name);
console.log("Hello world");
