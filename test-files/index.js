const ast = require("./ast-gen.js");
const generate = require("@babel/generator");
const fs = require("fs");

//client's AST node being regenrate to string
const output = generate.default(ast);

const strCode = output.code;

//output client strings as JS code. 
const writeCode = fs.createWriteStream("ApolloCode.js");
writeCode.write(`
import 'cross-fetch/polyfill';
import ApolloClient from "apollo-boost/lib/index";
import { gql } from "apollo-boost";

${strCode} 


module.exports = client`);

// console.log(ast.program.body[0].declarations[0].id.name);
// console.log(ast.program.body[0].declarations[0].init.type);

//let holderName = ast.program.body[0].declarations[0].id.name;

// const hasFunction = (ast) => {
//     if(ast.body === 'VariableDeclaration'in ast){
//         console.log("hit");
//     }
// }

// hasFunction(ast)

// let copyFunc = 'const test = () => { return 3 + 3}'
// eval(copyFunc)

//console.log(wrapper);

//eval(`${holderName}()`);
