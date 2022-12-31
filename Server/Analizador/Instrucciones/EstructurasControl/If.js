"use strict";
exports.__esModule = true;
var If = /** @class */ (function () {
    function If(expresion, cuerpo, cuerpoElse) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.cuerpoElse = cuerpoElse;
    }
    If.prototype.TraducirPython = function () {
        var traduccion = "";
        traduccion += "if " + this.expresion.TraducirPython() + " :\n";
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        if (this.cuerpoElse != null) {
            traduccion += this.cuerpoElse.TraducirPython();
        }
        return traduccion;
    };
    return If;
}());
exports["default"] = If;
