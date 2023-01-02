"use strict";
exports.__esModule = true;
//Funciona como un getIdentificador
var Identificador = /** @class */ (function () {
    function Identificador(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Identificador.prototype.ejecutarInstruccion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Identificador.prototype.ejecutarExpresion = function (tabla) {
        var sym = tabla.buscarSimbolo(this.valor);
        if (sym == null) {
            //Error semantico, no existe la variable
            console.log("Error semantico, no existe la variable");
        }
        return sym;
    };
    Identificador.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Identificador;
}());
exports["default"] = Identificador;
