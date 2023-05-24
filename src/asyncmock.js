const productos = [
    { nombre: "Jabon liquido Verde", precio: 800, id:"1", img: "../img/bidonVerde.jpg", idCat: "2" },
    { nombre: "Jabon liquido Azul", precio: 750, id: "2", img: "../img/desodorante.jpg", idCat: "2" },
    { nombre: "Jabon liquido Blanco", precio: 750, id:"3", img: "../img/bidonBlanco.jpg", idCat: "2" },
    { nombre: "Suavizante Violeta", precio: 600, id:"4", img: "../img/bidonVioleta.jpg", idCat: "2" },
    { nombre: "Suavizante Blanco", precio: 500, id:"5" , img: "../img/bidonBlanco.jpg", idCat: "2" },
    { nombre: "Suavizante Celeste", precio: 550, id:"6", img: "../img/bidonCeleste.jpg", idCat: "2" },
    { nombre: "Detergente Bleach", precio: 650, id:"7", img: "../img/bidonVerde.jpg", idCat: "3" },
    { nombre: "Detergente Ultra", precio: 600, id:"8", img: "../img/bidonAmarillo.jpg", idCat: "3" },
    { nombre: "Detergente Cremoso", precio: 700, id:"9", img: "../img/bidonBlanco.jpg", idCat: "3" },
    { nombre: "Detergente Power", precio: 750, id:"10", img: "../img/bidonCeleste.jpg", idCat: "3" },
    { nombre: "Concentrado Multisuperficios", precio: 2000, id:"11", img: "../img/bidonVioleta.jpg", idCat: "4" },
    { nombre: "Desodorante Multisuperficies", precio: 200, id:"12", img: "../img/desodorante.jpg", idCat: "4" },
    { nombre: "Cloro Concentrado", precio: 650, id:"13", img: "../img/bidonTransparente.jpg", idCat: "5" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 1000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 1000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}