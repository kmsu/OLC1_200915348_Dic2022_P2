import { Instruccion } from "../Instruccion";

export default class If implements Instruccion{

    private expresion:Instruccion;
    private cuerpo:Array<Instruccion>;
    private cuerpoElse:Instruccion;

    constructor(expresion:Instruccion, cuerpo:Array<Instruccion>, cuerpoElse:Instruccion){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.cuerpoElse = cuerpoElse;
    }

    TraducirPython(): string {
        let traduccion = "";

        traduccion += "if " + this.expresion.TraducirPython() + " :\n";
        
        for(let instruccion of this.cuerpo){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }

        if(this.cuerpoElse != null){
            traduccion += this.cuerpoElse.TraducirPython();
        }
        return traduccion;
    }

}