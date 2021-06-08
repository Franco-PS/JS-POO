export default class Clase{
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
    getClases(){
        return this.numeroClases
    }
}