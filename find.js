const nomes = ['Teste', 'Bagulhos', 'Bagulhos2', 'Windows', 'Freeway'];

// console.log(nomes.find((nome) => nome.charAt(0) == 'B'));

// Se a condição for atendida, retorna apenas o elemento do array em que foi atendido
function nossoFind(arr, funcao) {
    for(i = 0; i < arr.length; i++) {
        if(funcao(arr[i])) {
            return arr[i];
        }
    }
}

const retornoDoNossoFind = nossoFind(nomes, ((nome) => nome.charAt(0) == 'B'));

console.log(retornoDoNossoFind);