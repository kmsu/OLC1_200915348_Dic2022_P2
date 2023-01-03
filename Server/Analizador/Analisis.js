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

    getReporteTS(){
        if(this.tabla != null){
            return this.tabla.reporteSymTS();
        }
        return null;
    }

    putArbol(arbol){
        this.arbol= arbol;
    }

    getReporte(){
        //Se recorren desde el cliente
        return this.errores;
    }
 
    getConsola(){
        var consola = "";
        //if(this.errores.length == 0){
            this.tabla = new TablaSimbolos(null, "Global");
            for(let nodo of this.arbol){
                if(nodo != null){
                    let temp = nodo.ejecutarInstruccion(this.tabla);
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


}

module.exports = Analisis;