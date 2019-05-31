const ast = require('./ast-gen.js')
const generate = require('babel-generator');


console.log(ast.program.body[0].declarations[0].id.name);
console.log(ast.program.body[0].declarations[0].init.type);

const code = 'class Example {}';
const output = generate(ast, code);

console.log(output);
//let holderName = ast.program.body[0].declarations[0].id.name;

// const hasFunction = (ast) => {
//     if(ast.body === 'VariableDeclaration'in ast){
//         console.log("hit");
//     }
// }

// hasFunction(ast)



//eval(`${holderName}()`);
