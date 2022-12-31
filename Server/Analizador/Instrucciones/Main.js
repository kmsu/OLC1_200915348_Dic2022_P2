"use strict";
exports.__esModule = true;
var Main = /** @class */ (function () {
    function Main(cuerpo) {
        this.cuerpo = cuerpo;
    }
    Main.prototype.TraducirPython = function () {
        var traduccion = "def main():\n";
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        traduccion += "\nif__main__ = “ main ”:\n main()";
        return traduccion;
    };
    return Main;
}());
exports["default"] = Main;
