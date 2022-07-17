let arr = [1, 2, 3, 4, 5];

let verifica_array = (arr, size) => {
    try {
        if(!arr || !size) throw new ReferenceError("Os parâmetros não podem ser vazios!");
        if(typeof arr !== "object") throw new TypeError("Este não é um Array!");
        if(Number.isInteger(size) && arr.length !== size) throw new RangeError("O tamanho do array é diferente do informado!");
        if(!Number.isInteger(size)) throw new TypeError("O tamanho do array deve ser um número inteiro!");
        
        return arr;
    } catch (error) {
        if(error.name === "ReferenceError") console.log(`ERRO: ReferenceError -> ${error.message}`);
        if(error.name === "TypeError") console.log(`ERRO: TypeError -> ${error.message}`);
        if(error.name === "RangeError") console.log(`ERRO: RangeError -> ${error.message}`);
    }
}

verifica_array(arr, 6);
verifica_array();
verifica_array([], 0);
verifica_array(1, 1);
verifica_array([1, 2], "a");