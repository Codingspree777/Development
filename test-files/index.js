const ast = require('./ast-gen.js')
console.log(ast.program.body[0].declarations[0].id.name);
console.log(ast.program.body[0].declarations[0].init.type);

let holderName = 'try1'
//let holderName = ast.program.body[0].declarations[0].id.name;

// const hasFunction = (ast) => {
//     if(ast.body === 'VariableDeclaration'in ast){
//         console.log("hit");
//     }
// }

// hasFunction(ast)

const try1 = () =>{
    //console.log('pass');
}

// const wrapper = (holderName) => {
    eval(`${holderName}()`);
// }

// wrapper(holderName);