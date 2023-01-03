"use strict";
exports.__esModule = true;
var Incremental = /** @class */ (function () {
    function Incremental(id, tipo, linea, columna) {
        this.id = id;
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }
    Incremental.prototype.ejecutarInstruccion = function (tabla) {
        this.ejecutarExpresion(tabla);
        return "";
    };
    Incremental.prototype.ejecutarExpresion = function (tabla) {
        var sym = tabla.buscarSimbolo(this.id);
        if (sym != null) {
            if (this.tipo == '++') {
                sym.setValor(Number(sym.getValor() + 1));
            }
            else {
                sym.setValor(Number(sym.getValor() - 1));
            }
        }
        else {
            //Error semantico, no existe la variable
            console.log("Error semantico, no existe la variable");
        }
        return sym;
    };
    Incremental.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Incremental;
}());
exports["default"] = Incremental;
