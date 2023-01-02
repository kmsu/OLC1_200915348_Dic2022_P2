import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";

export default class Declaracion implements Instruccion{
    //valor es la expresion
    private tipoDato:Instruccion;
    private identificador:Array<string>;
    private valor:Instruccion; 
    private linea:number;
    private columna:number;
    
    constructor(tipo:Instruccion, id:Array<string>, valor:Instruccion, linea:number, columna:number){
        this.tipoDato = tipo;
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    
    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let symTipo = this.tipoDato.ejecutarExpresion(tabla); //ejecutarExpresion porque se va a obtener el tipo de variable
        let symValor;
        
        if(this.valor != null){
            symValor = this.valor.ejecutarExpresion(tabla);
            console.log("El valor de la expresion es: " + symValor.getValor().toString());
            console.log("El tipo de la expresion es: " + symValor.getTipoDato());
        }else{
            symValor = new Simbolo(symTipo.getTipoDato(), null, -1, -1); //-1, -1 porque no existe en el codigo de entrada
            console.log("")
        }

        for(let id of this.identificador){
            
            if(tabla.buscarSimbolo(id) == null){
                //comparar el tipo de variable con el tipo resultante de la expresion a asignar
                console.log("tipo dato variable: " + symTipo.getTipoDato());
                console.log("tipo dato expresion: " + symValor.getTipoDato());
                if(symTipo.getTipoDato() == symValor.getTipoDato()){
                    //set id al simbolo y agrega a la lista
                    let temp = symValor.copiarSimbolo();
                    temp.setId(id);
                    temp.setLinea(this.linea);
                    temp.setColumna(this.columna);
                    tabla.addSimbol(temp);
                    console.log("se agrego la variable " + id + " en la tabla de simbolos");
                }else{
                    //error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar
                    console.log("error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar")
                }
            }else{
                //error semantico ya existe la variable
                console.log("error semantico ya existe la variable");
            }
        }
        return ""; //como solo metemos el simbolo a la ts retornamos la cadena vacia porque no retornamos a la consola
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }

}