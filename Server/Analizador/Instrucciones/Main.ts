import { Instruccion } from "./Instruccion";


export default class Main implements Instruccion{
    
    private cuerpo:Array<Instruccion>;
    
    constructor(cuerpo:Array<Instruccion>){
        this.cuerpo = cuerpo;
    }

    TraducirPython(): string {
        let traduccion = "def main():\n";
        for(let instruccion of this.cuerpo){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        
        traduccion += "\nif__main__ = “ main ”:\n main()";
        
        return traduccion;
    }
    
}