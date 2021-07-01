export default class Curso{
    constructor(nombre,poster,alt){
        this.nombre=nombre
        this.poster=poster
        this.alt=alt
    }
    getNombre(){
        return this.nombre
    }
    getPoster(){
        return this.poster
    }
    getAlt(){
        return this.alt
    }
}