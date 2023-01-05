"use strict";
exports.__esModule = true;
var Simbolo_1 = require("./TablaSimbolos/Simbolo");
var TipoDato_1 = require("./TablaSimbolos/TipoDato");
var LlamadaVector = /** @class */ (function () {
    function LlamadaVector(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    LlamadaVector.prototype.ejecutarInstruccion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    LlamadaVector.prototype.ejecutarExpresion = function (tabla, errores) {
        var sym = new Simbolo_1["default"](TipoDato_1.TipoDato.ENTERO, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    };
    LlamadaVector.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return LlamadaVector;
}());
exports["default"] = LlamadaVector;
