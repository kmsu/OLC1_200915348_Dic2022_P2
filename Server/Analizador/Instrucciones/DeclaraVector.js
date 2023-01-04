"use strict";
exports.__esModule = true;
var Simbolo_1 = require("./TablaSimbolos/Simbolo");
var TipoDato_1 = require("./TablaSimbolos/TipoDato");
var DeclaraVector = /** @class */ (function () {
    function DeclaraVector(tipo, id, valor, linea, columna) {
        this.tipoDato = tipo;
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    DeclaraVector.prototype.ejecutarInstruccion = function (tabla, errores) {
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
        if (tabla.buscarSimbolo(this.identificador) == null) {
            //comparar el tipo de variable con el tipo resultante de la expresion a asignar
            if (symTipo.getTipoDato() == symValor.getTipoDato()) {
                //set id al simbolo y agrega a la lista
                var temp = symValor.copiarSimbolo();
                temp.setId(this.identificador);
                temp.setLinea(this.linea);
                temp.setColumna(this.columna);
                tabla.addSimbol(temp);
            }
            else {
                //error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar
                //console.log("error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar. linea " + this.linea)
                errores.putError("Semantico", this.linea, this.columna, "el tipo de la variable no es compatible con el tipo del valor a asignar");
            }
        }
        else {
            //error semantico ya existe la variable
            //console.log("error semantico ya existe la variable. declaracion vector en la linea " + this.linea);
            errores.putError("Semantico", this.linea, this.columna, "ya existe la variable. declaracion vector");
        }
        return ""; //como solo metemos el simbolo a la ts retornamos la cadena vacia porque no retornamos a la consola
    };
    DeclaraVector.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    DeclaraVector.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return DeclaraVector;
}());
exports["default"] = DeclaraVector;
