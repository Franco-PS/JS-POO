
import { Curso } from "./cursoClass.js";

const formulario= document.getElementById("formCursos")
formulario.addEventListener("submit",e =>{
    e.preventDefault()
    // console.log(el.target.nombreCurso.value)
    const target= e.target
    // console.log(target.nombreCurso.value)
    // console.log(target.nombrePoster.value)
    // console.log(target.nombreTemario.value)
    // console.log(target.nombreAlt.value)
    const valores= new Curso(target.nombreCurso.value,target.nombrePoster.value, target.nombreTemario.value,target.nombreAlt.value )

    mostrarCurso(valores)
})

// const html= new Curso("HTML","https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",25);

// const css= new Curso("CSS","https://edteam-media.s3.amazonaws.com/courses/small/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",25);

const elem= document.getElementById("cursos");

function mostrarCurso(valor){
    const box= document.createElement("div");
    box.classList.add("card");

    box.innerHTML=`
    
        <img src="${valor.getPoster()}" class="certifa" alt="${valor.getAlt()} >
        <p class="tituo">Curso: ${valor.getNombre()}</p>
        <span class="supParrafo">Clases: ${valor.getTemario()}</span>
    
`
elem.appendChild(box)
}


// mostrarCurso(html)

