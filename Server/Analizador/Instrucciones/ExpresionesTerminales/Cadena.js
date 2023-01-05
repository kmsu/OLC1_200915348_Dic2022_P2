"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Cadena = /** @class */ (function () {
    function Cadena(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Cadena.prototype.ejecutarInstruccion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Cadena.prototype.ejecutarExpresion = function (tabla, errores) {
        return new Simbolo_1["default"](TipoDato_1.TipoDato.CADENA, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
    };
    Cadena.prototype.dibujarAST = function (nodoPadre) {
        var codGraphviz = nodoPadre + 1 + " [ label=\"" + this.valor + "\"];\n";
        codGraphviz += nodoPadre + " -> " + (nodoPadre + 1) + ";\n";
        return codGraphviz;
    };
    return Cadena;
}());
exports["default"] = Cadena;
