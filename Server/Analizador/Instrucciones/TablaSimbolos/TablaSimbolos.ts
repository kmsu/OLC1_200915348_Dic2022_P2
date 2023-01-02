import Simbolo from "./Simbolo";

export default class TablaSimbolos {

    private nombre:string;
    private padre:TablaSimbolos;
    private listaSimbolos:Array<Simbolo>;

    constructor(padre:TablaSimbolos, nombre:string){
        this.padre = padre;
        this.nombre = nombre;
        this.listaSimbolos = new Array<Simbolo>;
    }

    addSimbol(simbolo:Simbolo){
        this.listaSimbolos.push(simbolo);
    }

    buscarSimbolo(id:string):Simbolo{
        let simboloActual;
        console.log("numero elementos: " + this.listaSimbolos.length);
        for(let symbol of this.listaSimbolos){
            if(symbol.getId() == id){
                simboloActual = symbol;
                console.log("Se encontro el simbolo");
                break;
            }
        }

        /* PODRIA DAR ERROR PORQUE PODRÍA NO HABER ASIGNADO NULL AL SIMBOLOACTUAL */
        if(simboloActual == null && this.padre != null){
            simboloActual = this.padre.buscarSimbolo(id);
        }

        return simboloActual;
    }
}