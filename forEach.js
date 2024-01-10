const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];
// nomes.forEach((nome, i) => {
//     console.log(nome, i);
// });

// Itera sobre todos os elementos do array
function nossoForEach(arr, funcao) {
    for (let i = 0; i < arr.length; i++) {
        funcao(arr[i], i);
    }
}

nossoForEach(nomes, function(nome, i) {
    console.log(nome, i)
});