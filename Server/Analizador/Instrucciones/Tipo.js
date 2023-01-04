"use strict";
exports.__esModule = true;
var Simbolo_1 = require("./TablaSimbolos/Simbolo");
var Tipo = /** @class */ (function () {
    function Tipo(tipo, linea, columna) {
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }
    Tipo.prototype.ejecutarInstruccion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Tipo.prototype.ejecutarExpresion = function (tabla, errores) {
        return new Simbolo_1["default"](this.tipo, null, this.linea, this.columna); //simbolo vacio se utiliza para representar el tipo de la variable a declarar
    };
    Tipo.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Tipo;
}());
exports["default"] = Tipo;
