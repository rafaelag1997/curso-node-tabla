const fs = require('fs');

const crearArchivo = (base = 5,listar = false,hasta = 10) => {

    return new Promise((resolve,reject) =>{
        try{
            let xx = 1,salida = '',consola = '';
            for( xx = 1 ; xx <= hasta ; xx ++){
            salida += `${base} x ${xx} = ${base * xx} ${xx == hasta ? '' : '\n'}`;
            consola += `${base}`.red + ' x '.yellow + `${xx}`.grey + ` = `.blue + `${base * xx} ${xx == hasta ? '' : '\n'}`.random;
            }
            if (listar){
                console.log(`============`.blue);
                console.log(`TABLA DEL`.rainbow + ` ${base}`.red);
                console.log(`============`.blue);
                console.log(consola);
            } 
           
            fs.writeFileSync(`salida/texto_${base}.txt`,salida);
            resolve(`texto_${base}.txt`);
        }catch(error){
            reject(`No se pudo crear el archivo base ${base} \n ${error}`);
        }
    });   
     
}

const crearArchivo2 = async(base = 5) =>{

    try{
        console.log(`============`);
        console.log(`TABLA DEL ${base}`);
        console.log(`============`);

        let xx = 1,salida = '';
        for( xx = 1 ; xx <= 10 ; xx ++){
        salida += `${base} x ${xx} = ${base * xx} ${xx == 10 ? '' : '\n'}`;
        }
        console.log(salida);
        fs.writeFileSync(`texto_${base}.txt`,salida);
        return `texto_${base}.txt`;
    }catch(error){
        throw `No se pudo crear el archivo base ${base} \n ${error}`;
    } 
     
}



module.exports={
    crearArchivo,
    crearArchivo2
};