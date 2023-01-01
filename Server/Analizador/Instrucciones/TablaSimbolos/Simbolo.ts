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

    setId(id:string){
        this.id = id;
    }
}