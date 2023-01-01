"use strict";
exports.__esModule = true;
var Simbolo = /** @class */ (function () {
    function Simbolo(tipoDato, valor, linea, columna) {
        this.tipoDato = tipoDato;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Simbolo.prototype.getId = function () {
        return this.id;
    };
    Simbolo.prototype.getTipoDato = function () {
        return this.tipoDato;
    };
    Simbolo.prototype.getValor = function () {
        return this.valor;
    };
    Simbolo.prototype.setId = function (id) {
        this.id = id;
    };
    return Simbolo;
}());
exports["default"] = Simbolo;
