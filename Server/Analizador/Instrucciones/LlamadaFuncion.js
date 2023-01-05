"use strict";
exports.__esModule = true;
var LlamadaFuncion = /** @class */ (function () {
    function LlamadaFuncion(id, cuerpo, linea, columna) {
        this.id = id;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    LlamadaFuncion.prototype.ejecutarInstruccion = function (tabla, errores) {
        return "";
    };
    LlamadaFuncion.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    LlamadaFuncion.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return LlamadaFuncion;
}());
exports["default"] = LlamadaFuncion;
