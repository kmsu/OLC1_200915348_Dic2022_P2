"use strict";
exports.__esModule = true;
var AsignaVector = /** @class */ (function () {
    function AsignaVector(id, valor, linea, columna) {
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    AsignaVector.prototype.ejecutarInstruccion = function (tabla) {
        var symValor = this.valor.ejecutarExpresion(tabla);
        var sym = tabla.buscarSimbolo(this.identificador);
        if (sym != null) {
            if (sym.getTipoDato() == symValor.getTipoDato()) {
                sym.setValor(symValor.getValor());
                console.log("El valor de la variable " + this.identificador + " ha sido modificado");
            }
            else {
                console.log("Error semantico: tipos incompatibles en la asignacion");
            }
        }
        else {
            //Error semantico, no existe la variable
            console.log("Error semantico, no existe la variable " + this.identificador);
        }
        return "";
    };
    AsignaVector.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    AsignaVector.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return AsignaVector;
}());
exports["default"] = AsignaVector;
