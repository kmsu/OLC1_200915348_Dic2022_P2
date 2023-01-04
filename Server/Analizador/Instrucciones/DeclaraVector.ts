import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";
import { TipoDato } from "./TablaSimbolos/TipoDato";

export default class DeclaraVector implements Instruccion{
    //valor es la expresion
    private tipoDato:Instruccion;
    private identificador:string;
    private valor:Instruccion; 
    private linea:number;
    private columna:number;
    
    constructor(tipo:Instruccion, id:string, valor:Instruccion, linea:number, columna:number){
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
        }else{
            if(this.valor==null){
                switch(symTipo.getTipoDato()){
                    case TipoDato.CADENA:
                        symValor = new Simbolo(symTipo.getTipoDato(), "cadNull", -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    case TipoDato.CARACTER:
                        symValor = new Simbolo(symTipo.getTipoDato(), 'charNull', -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    case TipoDato.BOOLEANO:
                        symValor = new Simbolo(symTipo.getTipoDato(), false, -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    case TipoDato.ENTERO:
                        symValor = new Simbolo(symTipo.getTipoDato(), 0, -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    default:
                        symValor = new Simbolo(symTipo.getTipoDato(), 0.0, -1, -1); //-1, -1 porque no existe en el codigo de entrada
                }
            }
        }

    
        
        if(tabla.buscarSimbolo(this.identificador) == null){
            //comparar el tipo de variable con el tipo resultante de la expresion a asignar
            if(symTipo.getTipoDato() == symValor.getTipoDato()){
                //set id al simbolo y agrega a la lista
                let temp = symValor.copiarSimbolo();
                temp.setId(this.identificador);
                temp.setLinea(this.linea);
                temp.setColumna(this.columna);
                tabla.addSimbol(temp);
            }else{
                //error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar
                console.log("error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar. linea " + this.linea)
            }
        }else{
            //error semantico ya existe la variable
            console.log("error semantico ya existe la variable. declaracion vector en la linea " + this.linea);
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