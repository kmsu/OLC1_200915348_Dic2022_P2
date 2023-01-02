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
    Simbolo.prototype.getLinea = function () {
        return this.linea;
    };
    Simbolo.prototype.getColumna = function () {
        return this.columna;
    };
    Simbolo.prototype.setId = function (id) {
        this.id = id;
    };
    Simbolo.prototype.setLinea = function (linea) {
        this.linea = linea;
    };
    Simbolo.prototype.setColumna = function (columna) {
        this.columna = columna;
    };
    //se copia el simbolo actual y se agrega a la nueva instancia de la variable
    Simbolo.prototype.copiarSimbolo = function () {
        return new Simbolo(this.tipoDato, this.valor, this.linea, this.columna);
    };
    return Simbolo;
}());
exports["default"] = Simbolo;
