const {createTabla}= require('./helpers/multiplicar') 
const argv = require('./config/yargs')
require('colors')

console.clear()
//---------------------
createTabla(argv.b,argv.l,argv.h)
.then(nameFile => console.log(nameFile.yellow,'creado'.yellow))
.catch( err => console.log(err))
//----------------------



















//------ DOCUMENTACIÓN ---------------
//option('l')
//listar
//boolean
// un argumento optional
// console.log(process.argv)
// console.log(argv)
// console.log('Base Yargs:',argv.b)
//-------------------------------------------
// console.log(process.argv)
// const [ , ,arg3 ='base=5'] = process.argv
// const [ , base=5] = arg3.split('=')


// console.log(base)
// const base = 7





