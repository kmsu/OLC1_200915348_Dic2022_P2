const { default: Errores } = require("./Instrucciones/Errores");
const { default: TablaSimbolos } = require("./Instrucciones/TablaSimbolos/TablaSimbolos");

class Analisis {

    constructor(){
        this.clearAll();
        this.tabla = new TablaSimbolos;
        this.erroreSemanticos = new Errores;
    }

    clearAll() {
        /**
         * lo usamos para instanciar y a la vez para limpiar
         *  */
        this.errores = [];
        this.arbol = [];
        
    }

    //Lexicos y sintacticos
    putError(tipo, fila, columna, descripcion){
        this.errores.push({ Tipo:tipo, Linea:fila, Columna:columna, Descripcion:descripcion })
    }

    getReporteTS(){
        if(this.tabla != null){
            return this.tabla.reporteSymTS();
        }
        return null;
    }

    putArbol(arbol){
        this.arbol= arbol;
    }
    
    getErrores(){
        //console.log("es null la lista de errores semanticos " + this.erroreSemanticos != null);
        for(let e of this.erroreSemanticos.getErrores()){
            this.errores.push(e);
        }
        return this.errores;
    }

    getConsola(){
        var consola = "";
        //if(this.errores.length == 0){
            this.tabla = new TablaSimbolos(null, "Global");
            this.erroreSemanticos = new Errores();
            for(let nodo of this.arbol){
                if(nodo != null){
                    let temp = nodo.ejecutarInstruccion(this.tabla, this.erroreSemanticos);
                    if(temp != ""){
                        consola += temp + "\n";
                    }
                }
            }
        //}else{
          //  consola = "Se han encontrado errores lexicos y/o sintacticos";
        //}
        return consola;
    }

    dibujarAST(){
        var codGraphviz = "digraph D {\n";
        
        if(this.arbol != null){
            codGraphviz += "1 [ label=\"INIT\"];\n";
            for(let nodo of this.arbol){
                if(nodo != null){
                    codGraphviz += nodo.dibujarAST(1); //el uno es el id del nodo inicial
                }
            }
        }
        return codGraphviz + "}";
    }

}

module.exports = Analisis;
