import Curso from './SCRIPTS/Curso.js'

const contenedorCursos = document.getElementById('cursos')
//Inputs del formulario para capturar sus datos
const nombreCurso = document.getElementById('nombreCurso')
const URL_imagen = document.getElementById('URL_imagen')
const descripcion = document.getElementById('descripcionCurso')
const clasesCurso = document.getElementById('cantClases')
const statusMessage = document.getElementById('formMessage')
const botonGuardar = document.getElementById('guardar')

function validarInputs() {
    if(nombreCurso.value.trim() === '' || URL_imagen.value.trim() === '' || descripcion.value.trim() === '' || clasesCurso.value < 1) {
        return false
    }
    return true
}

botonGuardar.addEventListener('click',() => {
    if(validarInputs()) {
        let curso = new Curso(nombreCurso.value,descripcion.value,URL_imagen.value,clasesCurso.value)
        imprimirCurso(curso)
        statusMessage.style.color = 'lime'
        statusMessage.innerHTML = "El curso se a guardado correctamente"
    } else {
        statusMessage.style.color = 'red'
        statusMessage.innerHTML = "Algunos datos no son validos. Intente de nuevo"
    }
})

function imprimirCurso(curso) {
    // Crear un elemento div para contener la carta del curso
const cartaCursoElemento = document.createElement('div');
cartaCursoElemento.innerHTML = `
<article class="card">
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="${curso.getImagen()}" alt="${curso.getNombre()}">
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
      ${curso.getNombre()}
    </h3>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <span class="small">Descripcion: ${curso.getDescripcion()}</span>
        <br>
        <span class="small">Numero de clases: ${curso.getClases()}</span>
      </div>
    </div>
  </div>
</article>
`

// Agregar la carta del curso al contenedor de cursos
contenedorCursos.appendChild(cartaCursoElemento);

}