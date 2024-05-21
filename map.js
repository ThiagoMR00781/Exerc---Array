const map = (arr, callback) => {
    const mapear = arr.map(elemt => elemt * 4)
    callback(mapear)
}

const n = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const exibir3 = (num) => {
    document.write("O quádruplo dos elementos são: " + num)
}

map(n, exibir3)