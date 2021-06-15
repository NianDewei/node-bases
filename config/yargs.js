const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'Factor multiplicando'
                    })
                    .option('l',{
                        alias:'listar',
                        type:'boolean',
                        default:false,
                        describe:'Muestra tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                        default:12,
                        describe:'Factor multiplicador'
                    })
                    .check((argv,options)=>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número'
                        }
                        return true
                    })
                    .argv

module.exports = argv;