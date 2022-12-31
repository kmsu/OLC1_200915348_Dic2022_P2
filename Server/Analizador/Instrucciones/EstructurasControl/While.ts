import { Instruccion } from "../Instruccion";

export default class While implements Instruccion{

    private expresion:Instruccion;
    private cuerpo:Array<Instruccion>;

    constructor(expresion:Instruccion, cuerpo:Array<Instruccion>){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
    }

    TraducirPython(): string {
        let traduccion = "";

        traduccion += "while " + this.expresion.TraducirPython() + " :\n";
        
        for(let instruccion of this.cuerpo){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }

        return traduccion;
    }

}