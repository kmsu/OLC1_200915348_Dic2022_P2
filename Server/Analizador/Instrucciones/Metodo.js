"use strict";
exports.__esModule = true;
var Metodo = /** @class */ (function () {
    function Metodo(id, cuerpo, linea, columna) {
        this.id = id;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    Metodo.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaMetodo = tabla.addSubEntorno("Metodo Void" + this.id);
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaMetodo, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    Metodo.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Metodo.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return Metodo;
}());
exports["default"] = Metodo;
