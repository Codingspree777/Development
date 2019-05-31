const path = require("path");
const fs = require("fs");
const acorn = require("acorn");
const jsx = require("acorn-jsx");


const filePath = path.join(__dirname, '..', 'test-files', 'function.js');
const file = fs.readFileSync(filePath, 'utf8');

const ast = acorn.Parser.extend(jsx()).parse(file, { sourceType: "module" });
//console.log(ast);
// const writeASTfile = (cfile) =>{
//   fs.createReadStream(cfile).pipe(fs.createWriteStream('astFunc.js'));
// }

// writeASTfile(ast);

module.exports = ast;