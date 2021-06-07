import Clase from "./clases.js"

const html=new Clase("HTML desde cero","https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",20)
const Css= new Clase("CSS desde cero","https://edteam-media.s3.amazonaws.com/courses/small/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",45)

function cursosA(clasesI){
    const leer= document.getElementById("cursos")
    leer.innerHTML= `
    <img src="${clasesI.getPoster()}"/>
    <p>${clasesI.getNombre()}</p>
    <span>Clases inpartidas: ${clasesI.getClases()}
    `

}
function cursos(clases){
    const leer= document.getElementById("curso")
    leer.innerHTML= `
    <img src="${clases.getPoster()}"/>
    <p>${clases.getNombre()}</p>
    <span>Clases inpartidas: ${clases.getClases()}
    `

}
cursosA(html)
cursos(Css)

// const leer= document.getElementById("cursos")
// leer.innerHTML= `
//     <img src="${html.getPoster()}"/>
//     <p>${html.getNombre()}</p>
//     <span>Clases inpartidas: ${html.getClases()}
// `
// const lee= document.getElementById("curso")
// lee.innerHTML= `
//     <img src="${Css.getPoster()}"/>
//     <p>${Css.getNombre()}</p>
//     <span>Clases inpartidas: ${Css.getClases()}
// `
