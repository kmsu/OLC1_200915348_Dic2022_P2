"use strict";
exports.__esModule = true;
var Asignacion = /** @class */ (function () {
    function Asignacion(id, valor, linea, columna) {
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Asignacion.prototype.ejecutarInstruccion = function (tabla) {
        var symValor = this.valor.ejecutarExpresion(tabla);
        for (var _i = 0, _a = this.identificador; _i < _a.length; _i++) {
            var id = _a[_i];
            var sym = tabla.buscarSimbolo(id);
            if (sym != null) {
                if (sym.getTipoDato() == symValor.getTipoDato()) {
                    sym.setValor(symValor.getValor());
                    console.log("El valor de la variable " + id + " ha sido modificado");
                }
                else {
                    console.log("Error semantico: tipos incompatibles en la asignacion");
                }
            }
            else {
                //Error semantico, no existe la variable
                console.log("Error semantico, no existe la variable");
            }
        }
        return "";
    };
    Asignacion.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Asignacion.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Asignacion;
}());
exports["default"] = Asignacion;
