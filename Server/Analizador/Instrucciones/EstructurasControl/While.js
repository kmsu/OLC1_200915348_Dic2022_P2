"use strict";
exports.__esModule = true;
var While = /** @class */ (function () {
    function While(expresion, cuerpo) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
    }
    While.prototype.TraducirPython = function () {
        var traduccion = "";
        traduccion += "while " + this.expresion.TraducirPython() + " :\n";
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        return traduccion;
    };
    return While;
}());
exports["default"] = While;
