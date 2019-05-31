const ast = require('./ast-gen.js')
//console.log(ast.body[0].declarations[0].id.name);

const holderName = 'try1'

const hasFunction = (ast) => {
    if(ast.body === 'VariableDeclaration'in ast){
        console.log("hit");
    }
}

hasFunction(ast)

const try1 = () =>{
    console.log('pass');
}

console.log(`${holderName}()`)