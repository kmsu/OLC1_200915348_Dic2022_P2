import Analisis from "../Analisis";
import Errores from "./Errores";
import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";
import { TipoDato } from "./TablaSimbolos/TipoDato";

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
    
    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        let symTipo = this.tipoDato.ejecutarExpresion(tabla, errores); //ejecutarExpresion porque se va a obtener el tipo de variable
        let symValor;
        
        if(this.valor != null){
            symValor = this.valor.ejecutarExpresion(tabla, errores);
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

        for(let id of this.identificador){
            
            if(tabla.buscarSimbolo(id) == null){
                //comparar el tipo de variable con el tipo resultante de la expresion a asignar
                if(symTipo.getTipoDato() == symValor.getTipoDato()){
                    //set id al simbolo y agrega a la lista
                    let temp = symValor.copiarSimbolo();
                    temp.setId(id);
                    temp.setLinea(this.linea);
                    temp.setColumna(this.columna);
                    tabla.addSimbol(temp);
                }else{
                    //error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar
                    //console.log("error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar. linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "error semantico, el tipo de la variable "+ id + " no es compatible con el tipo del valor a asignar.");
                }
            }else{
                //error semantico ya existe la variable
                //console.log("error semantico ya existe la variable. linea " + this.linea);
                errores.putError("Semantico", this.linea, this.columna, "error semantico ya existe la variable " + id);
            }
        }
        return ""; //como solo metemos el simbolo a la ts retornamos la cadena vacia porque no retornamos a la consola
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        //console.log("hola"+ Date.now());
        
        let idDeclaracion= Date.now();
        /**
         *  private tipoDato:Instruccion;
            private identificador:Array<string>;
            private valor:Instruccion; 
        */


        let codGraphviz = idDeclaracion + " [ label=\"DECLARACION\"];\n";
        codGraphviz += nodoPadre + " -> " + idDeclaracion + ";\n";
        //Se agrega los nodos de los hijos(tipodato, id, valor)
        //tipodato
        codGraphviz+= this.tipoDato.dibujarAST(idDeclaracion);
        //id
        //let contador=2;
        for (let identi of this.identificador){
            let id= new Date().getUTCMilliseconds();
            codGraphviz+=  id + " [ label=\"" + identi + "\"];\n";
            codGraphviz += idDeclaracion + " -> " + id + ";\n";
        }
        //valor
        codGraphviz+= this.valor.dibujarAST(idDeclaracion);

        return codGraphviz;
    }

}