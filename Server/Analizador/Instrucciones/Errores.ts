import { TipoDato } from "./TablaSimbolos/TipoDato";

interface errorJson{
    tipo:string;
    descripcion:string;
    linea: number;
    columna: number;
}

export default class Errores {
    private lista:Array<errorJson>;
    constructor(){
        this.lista = new Array<errorJson>;
    }

    putError(tipo, fila, columna, descripcion){
        let temp:errorJson = JSON.parse('{"Tipo": "' + tipo + '", "Linea": '+ fila +', "Columna": ' + columna +', "Descripcion": "' + descripcion + '" }');
        this.lista.push(temp);
    }

    getErrores(){
        return this.lista;
    }

}