import { TipoDato } from "./TipoDato";

export default class Simbolo {
    

    private id:string;
    private linea:number;
    private columna:number;
    private valor:object;
    private tipoDato:TipoDato;
    
    constructor(tipoDato:TipoDato, valor:any, linea:number, columna:number){
        this.tipoDato = tipoDato;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }

    getId():string{
        return this.id;
    }

    getTipoDato():TipoDato{
        return this.tipoDato;
    }

    getValor():any{
        return this.valor;
    }

    getLinea():Number{
        return this.linea;
    }

    getColumna():Number{
        return this.columna;
    }

    setId(id:string){
        this.id = id;
    }

    setLinea(linea:number){
         this.linea = linea;
    }

    setColumna(columna:number){
         this.columna = columna;
    }

    //se copia el simbolo actual y se agrega a la nueva instancia de la variable
    copiarSimbolo(){
        return new Simbolo(this.tipoDato, this.valor, this.linea, this.columna);
    }
}