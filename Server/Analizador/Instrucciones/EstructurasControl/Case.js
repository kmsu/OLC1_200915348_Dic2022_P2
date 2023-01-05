"use strict";
exports.__esModule = true;
var Case = /** @class */ (function () {
    function Case(condicion, cuerpo, cuerpoCase, linea, columna) {
        this.condicion = condicion;
        this.cuerpo = cuerpo;
        this.cuerpoCase = cuerpoCase;
        this.linea = linea;
        this.columna = columna;
    }
    Case.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaCase = tabla.addSubEntorno("Case");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaCase, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        if (this.cuerpoCase != null) {
            consola += this.cuerpoCase.ejecutarInstruccion(tabla, errores);
        }
        return consola;
    };
    Case.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Case.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return Case;
}());
exports["default"] = Case;
