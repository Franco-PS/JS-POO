import Clase from "./clases.js"


const blockNuevo= document.getElementById("cursos")

function cursosA(clasesI){
    const hijo= document.createElement("div")
    hijo.classList.add("etiqueta")
    hijo.innerHTML= `
    <img src="${clasesI.getPoster()}"/>
    <p>${clasesI.getNombre()}</p>
    <span>Clases inpartidas: ${clasesI.getClases()}</span>
    `
    blockNuevo.appendChild(hijo)
}

const formulario= document.getElementById("forCursos")

formulario.addEventListener("submit",e=>{
    e.preventDefault()
    const target= e.target
    const clasesI= new Clase(target.nombreCurso.value,target.posterCurso.value,target.clasesCurso.value)
    cursosA(clasesI)
})