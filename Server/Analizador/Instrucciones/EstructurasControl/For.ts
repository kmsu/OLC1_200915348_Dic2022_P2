import { Instruccion } from "../Instruccion";

export default class For implements Instruccion{
    
    private variable:string;
    private valorInicial:Instruccion;
    private valorFinal:Instruccion;
    private valorSalto:string;
    private variableSalto:string;
    private cuerpo:Array<Instruccion>;

    constructor(variable:string, valorInicial:Instruccion, valorFinal:Instruccion, varInc:string, valorSalto:string, cuerpo:Array<Instruccion>){
        this.variable = variable;
        this.valorInicial = valorInicial;
        this.valorFinal = valorFinal;
        this.valorSalto = valorSalto;
        this.variableSalto = varInc;
        this.cuerpo = cuerpo;
    }
    
    TraducirPython(): string {
        let traduccion = "";
        traduccion += "for " + this.variable + " in range(" + this.valorInicial.TraducirPython() + ", " + this.valorFinal.TraducirPython();
        
        if(this.valorSalto == "++"){
            traduccion += "):\n";
        }else{
            traduccion += ", -1):\n";
        }

        for(let instruccion of this.cuerpo){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }

        return traduccion;
    }
    
}