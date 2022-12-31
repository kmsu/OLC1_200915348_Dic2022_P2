import { Instruccion } from "./Instruccion";


export default class Print implements Instruccion{
    
    private cadena:string;
    private expresion:Instruccion;
    
    constructor(cadena:string, expresion:Instruccion){
        this.cadena = cadena;
        this.expresion = expresion;
    }

    TraducirPython(): string {
        let resultado = "";
        if(this.expresion != null){
            resultado += "print (" + this.cadena + ", " + this.expresion.TraducirPython() + ")" ;
        }else{
            resultado += "print (" + this.cadena + ")";
        }
        
        return resultado;
    }
    
}