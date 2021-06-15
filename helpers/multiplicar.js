const fs = require('fs')

const createTabla = async (base,listar=false,multiplicador=12) => {

  try {

    let salida = ''

    for (let i = 1; i <= multiplicador; i++) {
      salida += `${base} x ${i} = ${base*i}\n`
    }
    //------ listar------------
     if(listar){
      console.log('=================')
      console.log('>> TABLA DEL ', base, '<<')
      console.log('=================')
      console.log(salida)
     }
    //--------------------------------------------------
    fs.writeFileSync(`./out/Tabla del ${base}.txt`, salida)
    return `Tabla del ${base}.txt`

  } catch (error) {
    throw error
  }
  //--------------------------------------------------
}
module.exports = {
  createTabla
}