"use strict";
exports.__esModule = true;
var Case = /** @class */ (function () {
    function Case(condicion, cuerpo, cuerpoCase) {
        this.condicion = condicion;
        this.cuerpo = cuerpo;
        this.cuerpoCase = cuerpoCase;
    }
    Case.prototype.TraducirPython = function () {
        var traduccion = "";
        if (this.condicion != null) {
            traduccion = this.condicion + " :\n";
        }
        else {
            traduccion = "default: \n";
        }
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        if (this.cuerpoCase != null) {
            traduccion += this.cuerpoCase.TraducirPython();
        }
        return traduccion;
    };
    return Case;
}());
exports["default"] = Case;
