const find = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 5)
        callback(arr[i])
    }
}

const x = [1, 2, 3, 4, 5, 6, 8, 9, 10]

const exibir = (valor) => {
    document.write(valor + " ")
}

find(x, exibir);

