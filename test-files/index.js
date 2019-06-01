const ast = require('./ast-gen.js')
const generate = require('@babel/generator');

const output = generate.default(ast);

// console.log(ast.program.body[0].declarations[0].id.name);
// console.log(ast.program.body[0].declarations[0].init.type);


//let holderName = ast.program.body[0].declarations[0].id.name;

// const hasFunction = (ast) => {
//     if(ast.body === 'VariableDeclaration'in ast){
//         console.log("hit");
//     }
// }

// hasFunction(ast)


let copyFunc = 'const test = () => { return 3 + 3}'
eval(copyFunc)



//console.log(wrapper);

//eval(`${holderName}()`);


