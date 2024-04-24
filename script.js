import Usuario from './Usuario.js'
const usuario = new Usuario("David","Romero",18)

if(usuario.isOlder()) {
    console.log(`${usuario.getNombre} es mayor de edad`)
}