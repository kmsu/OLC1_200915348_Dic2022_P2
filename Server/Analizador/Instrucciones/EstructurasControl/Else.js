"use strict";
exports.__esModule = true;
var Else = /** @class */ (function () {
    function Else(cuerpo, linea, columna) {
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    Else.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaElse = tabla.addSubEntorno("Else");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaElse, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    Else.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Else.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Else;
}());
exports["default"] = Else;
