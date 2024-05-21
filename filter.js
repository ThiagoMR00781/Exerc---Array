const filter = (arr, callback) => {
    const filtrar = arr.filter(e => e > 10)
    callback(filtrar)
}

const num = [2, 4, 6, 8, 10, 13, 16, 14, 20]

const exibir2 = (n) => {
    document.write("Os numeros maiores que 10 são: " + n)
}

filter(num, exibir2)