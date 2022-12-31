import { Instruccion } from "./Instruccion";


export default class Return implements Instruccion{
    
    private cadena:string;
    private expresion:Instruccion;
    
    constructor(valor:string, expresion:Instruccion){
        this.cadena = valor.toLocaleLowerCase();
        this.expresion = expresion;
    }

    TraducirPython(): string {
        let resultado = "";
        if(this.expresion != null){
            resultado = this.cadena.toLocaleLowerCase() + " " + this.expresion.TraducirPython();
        }else{
            resultado = this.cadena.toLocaleLowerCase();
        }
        return resultado;
    }
    
}