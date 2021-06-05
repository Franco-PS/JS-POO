class Clase{
    constructor(nombre,poster,numeroClases){
        this.nombre=nombre
        this.poster=poster
        this.numeroClases=numeroClases
    }
    getNombre(){
        return this.nombre
    }
    getPoster(){
        return this.poster
    }
}

const html=new Clase("html","https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",20)



const leer= document.getElementById("cursos")
leer.innerHTML= `
    <img src="${html.getPoster()}"/>
`
