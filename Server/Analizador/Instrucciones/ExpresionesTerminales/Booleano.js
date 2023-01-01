"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Booleano = /** @class */ (function () {
    function Booleano(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Booleano.prototype.ejecutarInstruccion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Booleano.prototype.ejecutarExpresion = function (tabla) {
        return new Simbolo_1["default"](TipoDato_1.TipoDato.BOOLEANO, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
    };
    Booleano.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Booleano;
}());
exports["default"] = Booleano;
