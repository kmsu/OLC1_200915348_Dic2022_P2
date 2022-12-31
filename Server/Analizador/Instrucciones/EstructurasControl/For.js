"use strict";
exports.__esModule = true;
var For = /** @class */ (function () {
    function For(variable, valorInicial, valorFinal, varInc, valorSalto, cuerpo) {
        this.variable = variable;
        this.valorInicial = valorInicial;
        this.valorFinal = valorFinal;
        this.valorSalto = valorSalto;
        this.variableSalto = varInc;
        this.cuerpo = cuerpo;
    }
    For.prototype.TraducirPython = function () {
        var traduccion = "";
        traduccion += "for " + this.variable + " in range(" + this.valorInicial.TraducirPython() + ", " + this.valorFinal.TraducirPython();
        if (this.valorSalto == "++") {
            traduccion += "):\n";
        }
        else {
            traduccion += ", -1):\n";
        }
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        return traduccion;
    };
    return For;
}());
exports["default"] = For;
