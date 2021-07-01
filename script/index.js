import Curso from "./cursoClass.js";

const formulario= document.getElementById("formCursos");
console.log(formulario.nombreCurso)
formulario.addEventListener("submit",e=>{
    e.preventDefault()
    const target= e.target;
    const data= new Curso(target.nombreCurso.value,target.nombrePoster.value,target.nombreAlt.value)
    presenta(data)
})

//construtor block


const blox= document.getElementById("cursos");
function presenta(val){
    const hijo=document.createElement("div");
    hijo.classList.add("card");
    hijo.innerHTML=`
        <img class="certifa" src="${val.getPoster()}" alt="${val.getAlt()}">
        <p> Nombre de Curso: ${val.getNombre()}</p>
    `
    blox.appendChild(hijo)
}
