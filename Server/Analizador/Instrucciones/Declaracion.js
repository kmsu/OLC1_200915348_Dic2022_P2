"use strict";
exports.__esModule = true;
var Simbolo_1 = require("./TablaSimbolos/Simbolo");
var TipoDato_1 = require("./TablaSimbolos/TipoDato");
var Declaracion = /** @class */ (function () {
    function Declaracion(tipo, id, valor, linea, columna) {
        this.tipoDato = tipo;
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Declaracion.prototype.ejecutarInstruccion = function (tabla, errores) {
        var symTipo = this.tipoDato.ejecutarExpresion(tabla, errores); //ejecutarExpresion porque se va a obtener el tipo de variable
        var symValor;
        if (this.valor != null) {
            symValor = this.valor.ejecutarExpresion(tabla, errores);
        }
        else {
            if (this.valor == null) {
                switch (symTipo.getTipoDato()) {
                    case TipoDato_1.TipoDato.CADENA:
                        symValor = new Simbolo_1["default"](symTipo.getTipoDato(), "cadNull", -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    case TipoDato_1.TipoDato.CARACTER:
                        symValor = new Simbolo_1["default"](symTipo.getTipoDato(), 'charNull', -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    case TipoDato_1.TipoDato.BOOLEANO:
                        symValor = new Simbolo_1["default"](symTipo.getTipoDato(), false, -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    case TipoDato_1.TipoDato.ENTERO:
                        symValor = new Simbolo_1["default"](symTipo.getTipoDato(), 0, -1, -1); //-1, -1 porque no existe en el codigo de entrada
                        break;
                    default:
                        symValor = new Simbolo_1["default"](symTipo.getTipoDato(), 0.0, -1, -1); //-1, -1 porque no existe en el codigo de entrada
                }
            }
        }
        for (var _i = 0, _a = this.identificador; _i < _a.length; _i++) {
            var id = _a[_i];
            if (tabla.buscarSimbolo(id) == null) {
                //comparar el tipo de variable con el tipo resultante de la expresion a asignar
                if (symTipo.getTipoDato() == symValor.getTipoDato()) {
                    //set id al simbolo y agrega a la lista
                    var temp = symValor.copiarSimbolo();
                    temp.setId(id);
                    temp.setLinea(this.linea);
                    temp.setColumna(this.columna);
                    tabla.addSimbol(temp);
                }
                else {
                    //error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar
                    //console.log("error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar. linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "error semantico, el tipo de la variable " + id + " no es compatible con el tipo del valor a asignar.");
                }
            }
            else {
                //error semantico ya existe la variable
                //console.log("error semantico ya existe la variable. linea " + this.linea);
                errores.putError("Semantico", this.linea, this.columna, "error semantico ya existe la variable " + id);
            }
        }
        return ""; //como solo metemos el simbolo a la ts retornamos la cadena vacia porque no retornamos a la consola
    };
    Declaracion.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Declaracion.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Declaracion;
}());
exports["default"] = Declaracion;
