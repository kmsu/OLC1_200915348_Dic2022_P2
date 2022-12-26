import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  //Metodos directos de la barra de navegacion
  aboutInfo(){
    alert("Nombre: Kevin Samayoa \nCarnet: 200915348 \nOLC1")
  }

  Abrir(){
    alert("voy a cargar el archivo")
  }

  ejecutar(){
    //emito el servicio para que funcione
    this.dataService.contenidoEditor$.emit();
  }

  Limpiar(){
    this.dataService.limpiar$.emit("");
  }

  
  getData(){
    //retorne informacion
    this.dataService.getData().subscribe(
      //(res)=>{
      (res:any)=>{ //para poder retornar el incremental
        console.log(res);
        alert(res.incremental);
        
      }, 
      (err)=> {
        console.log(err);
      }
    )
  }
  
  setData(){
    //Aqui se trae lo que quiero mandar como valor al metodo setIncremental del servidor
    //Es decir aqui se recibe la información de los post que quiera hacer
    var json = {
      dato:50
    }
    
    //le mando al servidor el json que quiero reconozca el metodo get en el servidor
    this.dataService.setData(json).subscribe(
      //(res)=>{
      (res)=>{ //Agrego el any para poder usar la variable incremental en el alert
        //insertar lo que devuelva el servidor en un text area, h1, etc
        console.log(res);//retorna lo que el servidor esta retornando
        alert("todo fue realizado con exito")
      }, 
      (err)=> {
        console.log(err);
      }
    )
  }

}
