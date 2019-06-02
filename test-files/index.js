const ast = require('./ast-gen.js')
const generate = require('@babel/generator');
const fs = require('fs');


const output = generate.default(ast);

const strCode = output.code;

const copyCode = fs.createWriteStream('ApolloCode.js')
    copyCode.write(`function myFunc(){${strCode}} 
    module.exports = {myFunc: myFunc}`);


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


