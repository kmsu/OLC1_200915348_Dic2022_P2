"use strict";
exports.__esModule = true;
var Continue = /** @class */ (function () {
    function Continue(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Continue.prototype.ejecutarInstruccion = function (tabla, errores) {
        return "";
    };
    Continue.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Continue.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return Continue;
}());
exports["default"] = Continue;
