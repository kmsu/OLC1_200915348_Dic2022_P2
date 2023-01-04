"use strict";
exports.__esModule = true;
var Funcion = /** @class */ (function () {
    function Funcion(id, cuerpo, linea, columna) {
        this.id = id;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    Funcion.prototype.ejecutarInstruccion = function (tabla) {
        var consola = "";
        var tablaMetodo = tabla.addSubEntorno("Metodo " + this.id);
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaMetodo);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    Funcion.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Funcion.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Funcion;
}());
exports["default"] = Funcion;
