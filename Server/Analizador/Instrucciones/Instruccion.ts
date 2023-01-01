import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";

export interface Instruccion{

    /**
     * 
     * @param tabla es la tabla de simbolos
     * @ejecutarInstruccion devuelve en el string lo que se va a mostrar en consola de la aplicacion
     *  y ejecuta las sentencias de control.
     */
    ejecutarInstruccion(tabla:TablaSimbolos):string;
    /**
     * 
     * @param tabla es la tabla de simbolos
     * @ejecutarExpresion devuelve un simbolo con el valor de las operaciones realizadas en las expresiones
     * Ej: 5+6= 11 (retorna 11 en el simbolo)
     */
    ejecutarExpresion(tabla:TablaSimbolos):Simbolo;
    /**
     * 
     * @param nodoPadre es el identificador del nodo padre del AST
     * @dibujarAST retorna una cadena con el codigo necesario para ejecutar con Graphviz
     */
    dibujarAST(nodoPadre:number):string;
}