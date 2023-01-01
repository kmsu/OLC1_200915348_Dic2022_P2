const { default: TablaSimbolos } = require("./Instrucciones/TablaSimbolos/TablaSimbolos");

class Analisis {

    constructor(){
        this.clearAll();
        this.tabla = new TablaSimbolos;
    }

    clearAll() {
        /**
         * lo usamos para instanciar y a la vez para limpiar
         *  */
        this.errores = [];
        this.arbol = [];
        
    }

    getErrores(){
        return this.errores;
    }

    putError(tipo, fila, columna, descripcion){
        this.errores.push({ Tipo:tipo, Linea:fila, Columna:columna, Descripcion:descripcion })
    }

    putArbol(arbol){
        this.arbol= arbol;
    }

    getReporte(){
        //Se recorren desde el cliente
        return this.errores;
    }
 
    getConsola(){
        var cadeA = "";
        for(var i=0; i<this.arbol.length; i++){
            cadeA += this.arbol[i].ejecutarInstruccion(this.tabla) +"\n";
        }
        return cadeA;
    }


}

module.exports = Analisis;