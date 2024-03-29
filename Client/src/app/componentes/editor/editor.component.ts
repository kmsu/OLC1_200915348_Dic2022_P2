import { Component, OnInit } from '@angular/core';
import { text } from 'express';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  contenidoEditor: string = ''; //propiedad que almacena el contenido del area de texto
  
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.contenidoEditor$.subscribe(text => {
      this.editor();
      this.dataService.contenidoConsola$.emit();
    })

    this.dataService.limpiar$.subscribe( texto => {
      this.contenidoEditor = texto;
    })
  }

  editor(){
    var json = {
      dato:this.contenidoEditor
    }
    this.dataService.getAnalizador(json).subscribe(
      //(res)=>{
      (res:any)=>{ //Agrego el any para poder usar la variable incremental en el alert
        //insertar lo que devuelva el servidor en un text area, h1, etc
        console.log(res);//retorna lo que el servidor esta retornando
        alert("analizando ")
      }, 
      (err)=> {
        console.log(err);
      }
    )
  }

}
