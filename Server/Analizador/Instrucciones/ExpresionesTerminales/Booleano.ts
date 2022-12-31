import { Instruccion } from "../Instruccion";

export default class Booleano implements Instruccion{
    
    private valorBool:boolean;
    
    constructor(valor:boolean){
        this.valorBool = valor;
    }

    TraducirPython(): string {
        if(this.valorBool == true){
            return "true";
        }
        return "false";
    }
    
}