import { Instruccion } from "../Instruccion";

export default class Switch implements Instruccion{

    private expresion:Instruccion;
    private cuerpoCase:Instruccion;

    constructor(expresion:Instruccion, cuerpoCase:Instruccion){
        this.expresion = expresion;
        this.cuerpoCase = cuerpoCase;
    }

    TraducirPython(): string {
        let traduccion = "";

        traduccion += "def switch (  " + this.expresion.TraducirPython() + " ):\n   switcher = {\n";
        traduccion += this.cuerpoCase.TraducirPython() + "\n}";
        return traduccion;
    }

}