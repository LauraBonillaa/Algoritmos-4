const ciudades =[
    {
        ciudad: 'Bogota',
        poblacion: 156254
    },
    {
        ciudad: 'Cali',
        poblacion: 15612
    },
    {
        ciudad: 'Medellin',
        poblacion: 15424564
    },
    {
        ciudad: 'Nueva York',
        poblacion: 5453453
    },
]


function mayorespoblaciones (array){
let ciudadencontrada = ciudades[0]
    ciudades.forEach((ciudad)=>{
        if (ciudad.poblacion > ciudadencontrada.poblacion){
            console.log (ciudad)

            ciudadencontrada = ciudad
        }
    })
return ciudadencontrada
}
const result = mayorespoblaciones(ciudades)
console.log(result)