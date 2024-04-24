class Usuario {
    constructor(nombre,apellido,edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    getNombre() {return this.nombre}
    getApellido() {return this.apellido}
    getEdad() {return this.edad}
    setNombre(edad) {this.edad = edad}
    setNombre(nombre) {this.nombre = nombre}
    setApellido(apellido) {this.apellido = apellido}

    isOlder() {return this.edad >= 18}
    toString() {return `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nEdad: ${this.edad}`}
}
class Alumno extends Usuario {
    constructor(nombre,apellido,edad,cursosTomados) {
        super(nombre,apellido,edad)
        this.cursosTomados = cursosTomados
    }
    toString() {return `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nEdad: ${this.edad}\nCursos Tomados: ${this.cursosTomados}`}
}

const usuario = new Usuario("David","Romero",18)
const alumno = new Alumno("Jose",'Emiliano',22,['CSS','JS DOM','AJAX'])

console.log(alumno.toString())