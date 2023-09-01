window.onload = function() {
    const resultado = document.getElementById("resultado")
}

function CalculadoraEdad() {
    nombre = prompt("Ingresa tu nombre")
    fecha = prompt("Ingresa tu fecha de nacimiento con el siguiente formato: AAAA-MM-DD")
    edad = CalcularEdad(fecha)
    resultado.innerHTML = `Hola ${nombre}, tienes ${edad} años!`;
}

function TirandoFruta() {
    const frutas = ["manzana", "banana", "mandarina", "naranja", "pera", "uva", "kiwi", "frutilla", "sandia", "anana"]
    console.log(frutas)
    frutaBusq = prompt("Que fruta buscas?")
    const busqueda = BuscarFruta(frutas, frutaBusq)
    resultado.innerHTML = ComprobarBusqueda(busqueda, frutaBusq)
}

function CompararDatosTipos() {
    console.log(10 == "10") // va a dar true porque el doble igual no compara tipos
    console.log(10 === "10") // va a dar false porque el triple igual compara tipos ademas de contenido
    console.log(typeof 10.6) // va a dar number, js no tiene float ni decimal
}

function YoObjeto() {
    nombreCiudad = prompt("Ingresa el nombre de la ciudad")
    fechaFundacion = prompt("Ingresa la fecha de fundacion de la ciudad con el siguiente formato: AAAA-MM-DD")
    poblacion = prompt("Ingresa la poblacion de la ciudad")
    extension = prompt("Ingresa la extension de la ciudad")
    const ciudad = new Ciudad(nombreCiudad, fechaFundacion, poblacion, extension)
    
    for (const propiedad in ciudad) {
        console.log(`${propiedad}: ${ciudad[propiedad]}`)
    }
}

function DobleElementos(numeros) {
    console.log(numeros.map(numero => numero * 2))
}

function TrianguloAsterA() {
    for (let i = 0; i < 5; i++) {
        string = ""
        for (let k = 0; k <= i; k++) {
            string += "*"
        }
        console.log(string)
    }
}

function TrianguloAsterB() {
    let caracteres = 9
    let repeticionesAsterisco = 1
    const guion = "-"
    const asterisco = "*"
    let string = ""
    for (let i = 1; i < 6; i++) { 
        string = `${guion.repeat((caracteres - repeticionesAsterisco) / 2)}${asterisco.repeat(repeticionesAsterisco)}${guion.repeat((caracteres - repeticionesAsterisco) / 2)}`
        repeticionesAsterisco +=2
        console.log(string)
    }
}

function NombresConA() {
    const nombres = prompt("Ingresa una lista de nombres con el siguiente formato: Martin,Tomas")
    const listaNombres = nombres.split(",")
    listaConA = listaNombres.filter(nombre => nombre.toLowerCase().startsWith("a"))
    resultado.innerHTML = listaConA
}

function ReemplazarPalabra() {
    let texto = prompt("Ingresa un texto")
    let pReemplazar = prompt("Ingresa una palabra a reemplazar")
    let pReemplazo = prompt("Ingresa una palabra de reemplazo")
    resultado.innerHTML = texto.toLowerCase().replace(pReemplazar.toLowerCase(), pReemplazo.toLowerCase())
}

function CortarTexto() {
    const texto = prompt("Ingresa un texto")
    const numero = prompt("Ingresa un numero")
    resultado.innerHTML = texto.slice(0, numero)
}

function StringSeparador() {
    const nombres = prompt("Ingresa una lista de nombres con el siguiente formato: Martin,Tomas")
    resultado.innerHTML = nombres.replaceAll(",", "-")
}

function CalculadoraRecaudacion() {
    const pedido = prompt("Ingresa una lista de objetos pedidos junto con sus respectivos totales con el siguiente formato: nombre:total, nombre:total")
    const listaPedidos = pedido.split(", ")
    let total = 0
    listaPedidos.forEach(pedido => {
        posSeparador = pedido.indexOf(":")
        total += parseFloat(pedido.slice(posSeparador + 1))
    });
    resultado.innerHTML = `El total de la recaudacion es de $${total}`
}