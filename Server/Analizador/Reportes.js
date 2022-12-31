
class Reportes {

    constructor(){
        this.clearAll();
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
        /*var cadena = '';
        for (var i = 0; i < this.errores.length ; i++) {
            cadena += "<td>" + i + "</td>" + this.errores[i];
        }
        cadena += "</table>";*/
        return this.errores;
    }
 
    getTraduccion(){
        var cadeA = "";
        for(var i=0; i<this.arbol.length; i++){
            cadeA+=this.arbol[i].TraducirPython()+"\n";
        }
        return cadeA;
    }


}

module.exports = Reportes;