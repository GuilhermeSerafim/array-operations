const numeros = [1, 2, 3];

const somaDoReduce = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);  // 0 é o valor inicial do acumulador

// Reduz todos os valores de um array em um unico valor, com base nas implementacoes da funcao passada como argumento
function nossoReduce(arr, funcao, valorInicial) {
    let acumulador = valorInicial;

    for (let i = 0; i < arr.length; i++) {
        acumulador = funcao(acumulador, arr[i], i, arr); // Explicaç~´ao do scripts no final do script
    }

    return acumulador;
}
// Aqui estamos usando apenas 2 parametros na arrow function
const resultadoDoNossoReduce = nossoReduce(numeros, (acumulador, numero) => {
    return acumulador + numero;
}, 0);


console.log('Usando todos os parametros para entender melhor');
const resultadoDoNossoReduce2 = nossoReduce(numeros, (acumulador, numero, indice, array) => {
    console.log(`Elemento: ${numero}, Índice: ${indice}, Array: ${array}`);
    return acumulador + numero;
}, 0);

console.log('Soma: '+ resultadoDoNossoReduce2);

/* Explicação dos parametros da 'funcao':

 acumulador: Este é o valor acumulado que está sendo construído a cada iteração. Inicialmente, é o valor inicial passado como segundo argumento para o método reduce. 
 Nas iterações subsequentes, é o valor retornado pela chamada anterior da função de callback.

 valorAtual: Este é o valor do elemento atual do array que está sendo processado durante a iteração.

 indice: Este é o índice do elemento atual no array.

 array: Este é o array original que está sendo percorrido pelo método reduce. 
*/