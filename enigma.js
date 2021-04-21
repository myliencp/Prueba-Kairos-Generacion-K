//Declaro e inicializo las variables auxiliares
let mensajeModificado = '';
let mensajeOrdenado = [];
let posicion = '';
let url = '';

//Declaro las constantes.
const mensaje='Cómo será dar con Nekgikis V...';
const serieNumeros=[23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22];

//Elimino los espacios mediante ER
mensajeModificado = mensaje.replace(/ /g, "");

//Elimino las mayusculas
mensajeModificado = (mensajeModificado.toLowerCase());

//Elimino las tildes mediante ER
mensajeModificado= mensajeModificado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

//Recorremos la serie de numeros y guardamos la letra del mensaje en su posicion correspondiente en el mensaje ordenado
for(let i=0;i<serieNumeros.length;i++){
    posicion = serieNumeros[i];
    mensajeOrdenado[posicion] = mensajeModificado[i]; }

//Imprimimos el contenido del mensaje ordenado como un string
url = mensajeOrdenado.join('');
console.log(url);



