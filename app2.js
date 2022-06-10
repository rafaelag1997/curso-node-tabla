

console.clear();
console.log(`============`);
console.log(`TABLA DEL 5`);
console.log(`============`);
const base = 3;
let xx = 1,salida = '';

for( xx = 1 ; xx <= 10 ; xx ++){
   salida += `${base} x ${xx} = ${base * xx} ${xx == 10 ? '' : '\n'}`;
}
const countChar = texto =>{
    return new Promise( (exito,error) => {
        let total = texto.length;
        total ? exito(`Total de caracteres almacenados ${total} `) :
            error(`No se pudo calcular el total de caracteres de la cadena.`)
    });

}
try {
    fs.writeFileSync(`texto_${base}.txt`,salida);
    countChar(salida)
            .then(msg => console.log(`se creó el archivo \n${msg}`))
            .catch(err => console.log(err));
    console.log(salida);
} catch (error) {
    console.log(`hubo un error en la localizacion del archivo ${error.code == 'ENOET' ? 'No se encuentra la ubicacion del archivo':''}`);
}


