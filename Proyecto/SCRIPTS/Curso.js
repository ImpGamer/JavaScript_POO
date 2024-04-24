//Modo que permitimos exportar la clase, es decir que otros archivos accedan a ella
export default class Curso {
    constructor(nombre,descripcion,imagen,clases) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.clases = clases
    }
    
}