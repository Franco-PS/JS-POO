export  class Curso{
    constructor(nombre,poster,temario, alt ){
        this.nombre= nombre
        this.poster= poster
        this.temario= temario
        this.alt=alt
    }
    getNombre(){
        return this.nombre
    }
    getPoster(){
        return this.poster
    }
    getTemario(){
        return this.temario
    }
    getAlt(){
        return this.alt
    }
}