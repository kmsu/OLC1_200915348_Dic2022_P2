"use strict";
exports.__esModule = true;
var Else = /** @class */ (function () {
    function Else(expresion, cuerpo, cuerpoElse) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.cuerpoElse = cuerpoElse;
    }
    Else.prototype.TraducirPython = function () {
        var traduccion = "";
        if (this.expresion != null) {
            traduccion = "elif " + this.expresion.TraducirPython() + " :\n";
        }
        else {
            traduccion = "else: \n";
        }
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        if (this.cuerpoElse != null) {
            traduccion += this.cuerpoElse.TraducirPython();
        }
        return traduccion;
    };
    return Else;
}());
exports["default"] = Else;
