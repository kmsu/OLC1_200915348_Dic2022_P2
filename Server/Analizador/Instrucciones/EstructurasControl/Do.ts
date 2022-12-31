import { Instruccion } from "../Instruccion";

export default class Do implements Instruccion{

    private expresion:Instruccion;
    private cuerpo:Array<Instruccion>;

    constructor(cuerpo:Array<Instruccion>, expresion:Instruccion){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
    }

    TraducirPython(): string {
        let traduccion = "";

        traduccion += "while True:\n";
        
        for(let instruccion of this.cuerpo){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        
        traduccion += " if( " + this.expresion.TraducirPython() + "):\n     break";
        
        return traduccion;
    }

}