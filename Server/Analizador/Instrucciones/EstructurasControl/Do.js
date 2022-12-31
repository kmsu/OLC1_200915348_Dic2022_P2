"use strict";
exports.__esModule = true;
var Do = /** @class */ (function () {
    function Do(cuerpo, expresion) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
    }
    Do.prototype.TraducirPython = function () {
        var traduccion = "";
        traduccion += "while True:\n";
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        traduccion += " if( " + this.expresion.TraducirPython() + "):\n     break";
        return traduccion;
    };
    return Do;
}());
exports["default"] = Do;
