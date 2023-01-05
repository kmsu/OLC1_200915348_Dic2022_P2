"use strict";
exports.__esModule = true;
var If = /** @class */ (function () {
    function If(expresion, cuerpo, cuerpoElse, linea, columna) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.cuerpoElse = cuerpoElse;
        this.linea = linea;
        this.columna = columna;
    }
    If.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaIf = tabla.addSubEntorno("IF");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaIf, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        if (this.cuerpoElse != null) {
            consola += this.cuerpoElse.ejecutarInstruccion(tabla, errores);
        }
        return consola;
    };
    If.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    If.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return If;
}());
exports["default"] = If;
