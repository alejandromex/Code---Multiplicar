const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const  colors = require('colors/safe');




let comando = argv._[0];

switch(comando)
{
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then( archivo =>{
            console.log(`tabla de ${argv.base} hasta ${argv.limite}`, colors.green('Creada correctamente'));
        }).catch(err => {
            console.log(err);
        })
        break;
    default:
        console.log("Comando desconocido");
        break;
}

// let parametro = argv[2];
// base = parametro.split("=")[1];


