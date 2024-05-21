const find = (arr, callback) => {
    const procurar = arr.find(p => p.startsWith('P'))
    callback(procurar)
}

const marcasCarro = [
    "BMW",
    "Porsche",
    "Nissan",
    "Volkswagen",
    "Fiat",
    "Pagani"
]

const exibir = (procura) => {
    document.write("O carro que começa com letra P é " + procura)
}

find(marcasCarro, exibir);

