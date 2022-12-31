import { Instruccion } from "../Instruccion";

export default class Case implements Instruccion{

    private condicion:string;
    private cuerpo:Array<Instruccion>;
    private cuerpoCase:Instruccion;

    constructor(condicion:string, cuerpo:Array<Instruccion>, cuerpoCase:Instruccion){
        this.condicion = condicion;
        this.cuerpo = cuerpo;
        this.cuerpoCase = cuerpoCase;
    }

    TraducirPython(): string {
        let traduccion = "";

        if(this.condicion != null){
            traduccion = this.condicion + " :\n";
        }else{
            traduccion = "default: \n";
        }
        
        for(let instruccion of this.cuerpo){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }

        if(this.cuerpoCase != null){
            traduccion += this.cuerpoCase.TraducirPython();
        }
        return traduccion;
    }

}