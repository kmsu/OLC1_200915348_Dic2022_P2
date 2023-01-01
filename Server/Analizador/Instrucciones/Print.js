"use strict";
exports.__esModule = true;
var Print = /** @class */ (function () {
    function Print(expresion, linea, columna) {
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
    }
    Print.prototype.ejecutarInstruccion = function (tabla) {
        var symExpresion = this.expresion.ejecutarExpresion(tabla);
        var consola = symExpresion.getValor().toString();
        return consola;
    };
    Print.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Print.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Print;
}());
exports["default"] = Print;
