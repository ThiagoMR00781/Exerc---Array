const filter = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 10)
        callback(arr[i])
    }
}

const num = [2, 4, 6, 8, 10, 13, 16, 14, 20]

const exibir2 = (n) => {
    document.write(n + " ")
}

filter(num, exibir2)