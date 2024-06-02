const map = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] * 4)
        callback(arr[i])
    }
}

const n = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const exibir3 = (num) => {
    document.write(num + " ")
}

map(n, exibir3)