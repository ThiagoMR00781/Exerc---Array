const reduce = (arr, callback, valorInicial) => {
    const reduzir =  arr.reduce( 
        (acumulador, elemento) => acumulador + elemento.launches , valorInicial
    )
    callback(reduzir)
}

const foguetes = [
    {country: "U.S.A", launches: 25},
    {country: "Russia", launches: 35},
    {country: "India", launches: 5},
    {country: "China", launches: 10},
]

const exibir4 = (concat) => {
    document.write("O total de foguetes lançados foram: " + concat)
}

reduce(foguetes, exibir4, 0)