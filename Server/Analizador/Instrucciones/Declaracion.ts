import { Instruccion } from "./Instruccion";

export default class Declaracion implements Instruccion{
    
    private tipoDato:Instruccion;
    private identificador:Array<string>;
    private valor:Instruccion; //expresion
    
    constructor(tipo:Instruccion, id:Array<string>, valor:Instruccion){
        this.tipoDato = tipo;
        this.identificador = id;
        this.valor = valor;
        
    }

    TraducirPython(): string {

        let listaId = "";
        
        for(let i = 0 ; i <= this.identificador.length - 1 ; i++){
            if(i == 0){
                listaId += this.identificador[i];
            }
            else{
                listaId += ", " + this.identificador[i];
            }
        }

        if(this.valor != null){
            listaId += " = " + this.valor.TraducirPython();
        }else{
            listaId += " = none";
        }
        
        return listaId
    }   
}