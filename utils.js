// 1. CalculadoraEdad
function CalcularEdad(fecha) {
    fecha = new Date(fecha)
    diferencia = Date.now() - fecha.getTime()
    años = new Date(diferencia)
    return Math.abs(años.getUTCFullYear() - 1970);
}

// 2. TirandoFruta
function BuscarFruta(frutas, frutaBuscada) {
    return frutas.find(fruta => fruta === frutaBuscada.toLowerCase())
}

function ComprobarBusqueda(busqueda, fruta) {
    if (busqueda === undefined) {
        return `No, no tenemos ${fruta}`
    }
    else {
        return `Sí, tenemos ${fruta}!`
    }
}

// 4. YoObjeto
class Ciudad {
    constructor(nombre, fechaFundacion, poblacion, extension) {
        this.nombre = nombre;
        this.fechaFundacion = fechaFundacion;
        this.poblacion = poblacion;
        this.extension = extension;
    }
}