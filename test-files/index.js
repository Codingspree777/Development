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



module.exports = {myFunc: myFunc}`);

// console.log(ast.program.body[0].declarations[0].id.name);
// console.log(ast.program.body[0].declarations[0].init.type);

//let holderName = ast.program.body[0].declarations[0].id.name;


// eval(copyFunc)



//eval(`${holderName}()`);
