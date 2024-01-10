const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];

// console.log(nomes.filter(nome => nome.length > 5));

// Retorna um novo array com itens que passaram pela implementação
function nossoFilter(arr, funcao) {
    const novoArray = [];
    for (i = 0; i < arr.length; i++) {
        if(funcao(arr[i])){
            novoArray.push(arr[i]);
        };
    }
    return novoArray;
}

const retornoDoNossoFilter = nossoFilter(nomes, (nome) => nome.length > 5);
console.log(retornoDoNossoFilter);