"use strict";
exports.__esModule = true;
var Asignacion = /** @class */ (function () {
    function Asignacion(id, valor, linea, columna) {
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Asignacion.prototype.ejecutarInstruccion = function (tabla, errores) {
        var symValor = this.valor.ejecutarExpresion(tabla, errores);
        for (var _i = 0, _a = this.identificador; _i < _a.length; _i++) {
            var id = _a[_i];
            var sym = tabla.buscarSimbolo(id);
            if (sym != null) {
                if (sym.getTipoDato() == symValor.getTipoDato()) {
                    sym.setValor(symValor.getValor());
                }
                else {
                    //console.log("Error semantico: tipos incompatibles en la asignacion en la linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "tipos incompatibles en la asignacion");
                }
            }
            else {
                //Error semantico, no existe la variable
                //console.log("Error semantico, no existe la variable " + id + "en asignacion en la linea " + this.linea);
                errores.putError("Semantico", this.linea, this.columna, "no existe la variable " + id + " en asignacion");
            }
        }
        return "";
    };
    Asignacion.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Asignacion.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Asignacion;
}());
exports["default"] = Asignacion;
