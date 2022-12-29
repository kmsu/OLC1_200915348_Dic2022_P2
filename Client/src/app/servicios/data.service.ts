import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contenidoEditor$ = new EventEmitter<string>();
  contenidoConsola$ = new EventEmitter<string>();
  limpiar$ = new EventEmitter<string>();
  reporteErrore$ = new EventEmitter<string>();
  reporteAST$ = new EventEmitter<string>();
  reporteTS$ = new EventEmitter<string>();

  //Para conectar al servidor (Express)
  URL = "http://localhost:8080"
  
  //constructor() { }
  constructor( private http:HttpClient ) { }

  //Metodos para usar con el servidor
  getAnalizador(json: any){
    return this.http.post(`${this.URL}/editor`, json);
  }

  getAnalisis(){
    return this.http.get(`${this.URL}/getAnalisis`);
  } 

  getErrores(){
    return this.http.get(`${this.URL}/getErrores`);
  } 
 
  
}
