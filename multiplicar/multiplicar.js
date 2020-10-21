const fs = require('fs');
const { colors } = require('colors');




let listarTabla = (base, limite = 10) => {

    console.log("======================".green);
    console.log(`==== Tabla de ${base}=====`.cyan);
    console.log("======================".white);
        for(let i = 1; i <=limite; i++)
        {
           console.log(`${i} * ${base} = ${i*base} \n`);
        }

}


let crearArchivo = (base,limite) =>{
    return new Promise((resolve,reject) => {
        if(!Number(base))
        {
            reject(`El valor introducido ( ${base} )No es un numero`);
            return;
        }

        let data = '';
        
        for(let i = 1; i <=limite; i++)
        {
            data += (` ${i} * ${base} = ${i*base} \n`);
        }
        
        
        fs.writeFile(`tablas/Times-${base}.txt`, data, (err) => {
            if(err)
            {
                reject(err)
            }
            resolve('The file has been created!');
        });
        
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
