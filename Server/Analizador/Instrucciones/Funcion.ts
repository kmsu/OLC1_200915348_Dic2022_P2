import { Instruccion } from "./Instruccion";

export default class Funcion implements Instruccion{
    
    private id:string;
    private parametros:Array<string>;
    private instrucciones:Array<Instruccion>;

    constructor(id:string, parametros:Array<string>, instrucciones:Array<Instruccion>){
        this.id = id;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
    }
    
    TraducirPython(): string {
        let traduccion = "def " + this.id + "( ";

        if(this.parametros != null){
            for(let i = 0 ; i <= this.parametros.length - 1 ; i++){
                if(i == 0){
                    traduccion += this.parametros[i];
                }
                else{
                    traduccion += ", " + this.parametros[i];
                }
            }
        }
        traduccion += " ):\n"

        for(let instruccion of this.instrucciones){
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }

        return traduccion;
    }
    
}