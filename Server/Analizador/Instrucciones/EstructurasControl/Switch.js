"use strict";
exports.__esModule = true;
var Switch = /** @class */ (function () {
    function Switch(expresion, cuerpoCase) {
        this.expresion = expresion;
        this.cuerpoCase = cuerpoCase;
    }
    Switch.prototype.TraducirPython = function () {
        var traduccion = "";
        traduccion += "def switch (  " + this.expresion.TraducirPython() + " ):\n   switcher = {\n";
        traduccion += this.cuerpoCase.TraducirPython() + "\n}";
        return traduccion;
    };
    return Switch;
}());
exports["default"] = Switch;
