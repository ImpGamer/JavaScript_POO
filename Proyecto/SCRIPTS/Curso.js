//Modo que permitimos exportar la clase, es decir que otros archivos accedan a ella
export default class Curso {
    constructor(nombre,descripcion,imagen,clases) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.clases = clases
    }
    getNombre() {return this.nombre}
    getDescripcion() {return this.descripcion}
    getImagen() {return this.imagen}
    getClases() {return this.clases}

    //Setters
    setNombre(nombre) {this.nombre = nombre}
    setDescripcion(descripcion) {this.descripcion = descripcion}
    setImagen(imgen) {this.imagen = imgen}
    setClases(clases) {this.clases = clases}
}