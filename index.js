// Para el laboratorio de este módulo, vamos a calcular el total de la compra de un producto (su precio
//     multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto:
//     "alimentacion": 10%
//     "libro": 4%

//Calcular precio total

const product = { count: 3, price: 12.55, type: "ropa" };
const price = product.price;
const count = product.count;
const type = product.type
const total = count <= 0 ? 0 : count * price
// console.log(total)
const ivaRopa = 0.21;
const ivaAlimentos = 0.1;
const ivaLibros = 0.4;
const totalIva = price;

//Calcular el IVA con if

// if (count >= 0 && type === "ropa") {
//     const totalIva = total * ivaRopa
//     console.log(totalIva)
// } else if (count >= 0 && type === "alimentos") {
//     const totalIva = total * ivaAlimentos
//     console.log(totalIva)

// } else if (count >= 0 && type === "libros") {
//     const totalIva = total * ivaLibros
//     console.log(totalIva)
// }

//Calcular el IVA con switch
switch (type) {
    case "ropa": console.log(total * ivaRopa); break;
    case "alimentos": console.log(total * ivaAlimentos); break;
    case "libros": console.log(total * ivaLibros); break;
    default: console.log("No se puede calcular"); break;
}


// Extra 1: Calcular sueldo neto en nómina
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}
const sueldo = empleado.bruto;
const hijos = empleado.hijos;
const pagas = empleado.pagas;
const retencion1 = 0.8
const retencion2 = 1.6
const retencion3 = 3

if (sueldo < 12000) {
    const finalSueldo = sueldo;
    // console.log(finalSueldo)
} else if (sueldo > 12000 || sueldo < 24.000) {
    const retencion = sueldo * retencion1;
    const finalSueldo = sueldo - retencion
    // console.log(finalSueldo)

} else if (sueldo > 24000 || sueldo < 34000) {
    retencion3 = 3.0
    const retencion = sueldo * retencion2;
    const finalSueldo = sueldo - retencion
    // console.log(finalSueldo)
} else if (sueldo > 34000) {
    const retencion = sueldo * retencion3;
    const finalSueldo = sueldo - retencion
    // console.log(finalSueldo)

}

function getVat(type) {
    let iva
    if (type === "ropa") {
        const iva = 0.8
        return iva

    } else if (type === "libros") {
        const iva = 0.4
        return iva
    } else if (type === "alimentos") {
        const iva = 0.1
        return iva
    }
    return iva

}
function getTotalVat(type) {
    return count > 0 ? price * getVat(type) : 0;
}
console.log(getTotalVat(type))
