import Simbolo from "./Simbolo";
import { TipoDato } from "./TipoDato";

interface reporteJson{
    no: number;
    id: string;
    tipoDato: TipoDato;
    valor: string;
    entorno: string;
    linea: number;
    columna: number;
}

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
        for(let symbol of this.listaSimbolos){
            if(symbol.getId() == id){
                simboloActual = symbol;
                break;
            }
        }

        /* PODRIA DAR ERROR PORQUE PODRÍA NO HABER ASIGNADO NULL AL SIMBOLOACTUAL */
        if(simboloActual == null && this.padre != null){
            simboloActual = this.padre.buscarSimbolo(id);
        }

        return simboloActual;
    }

    reporteSymTS(){
        let lista1 = new Array<reporteJson>;
        let cont = 1;
        for(let symbol of this.listaSimbolos){
            let temp:reporteJson = JSON.parse('{"no":'+cont+', "id": "' + symbol.getId()+ '", "TipoDato":'+ symbol.getTipoDato()  + ', "valor": "'+ symbol.getValor().toString()+ '", "entorno": "'+ this.nombre + '", "linea": '+ symbol.getLinea()+', "columna": ' + symbol.getColumna()+' }');
            lista1.push(temp);
            cont++;
        }

        if (this.padre != null){
            let lista2 = this.padre.reporteSymTS();
            for (let symbol of lista2){
                lista1.push(symbol);
            }
        }
        return lista1;
    }
}