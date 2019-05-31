const ast = require('./ast-gen.js')
import {parse} from 'babylon';
import generate from 'babel-generator';


console.log(ast.program.body[0].declarations[0].id.name);
console.log(ast.program.body[0].declarations[0].init.type);



//let holderName = ast.program.body[0].declarations[0].id.name;

// const hasFunction = (ast) => {
//     if(ast.body === 'VariableDeclaration'in ast){
//         console.log("hit");
//     }
// }

// hasFunction(ast)



//eval(`${holderName}()`);
