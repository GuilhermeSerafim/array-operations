const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];
// nomes.map((nome) => {
//     console.log(nome.toUpperCase());
// })

// Cria um novo array com as modificações
function nossoMap(arr, funcao) {
    const novoArray = [];
    for (let i = 0; i < arr.length; i++) {
        novoArray.push(funcao(arr[i], i));
    }
    return novoArray;
};

const retornoDoNossoMap = nossoMap(nomes, ((nome, i) => {
    console.log(nome, i);
    return `<li>${nome.toUpperCase()}</li>`
}));

console.log(retornoDoNossoMap);