import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.css']
})
export class ConsolaComponent implements OnInit {

  contenidoConsola: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    
    this.dataService.contenidoConsola$.subscribe( texto => {
      this.contenidoConsola = '';
      this.getData();
    })

    this.dataService.limpiar$.subscribe( texto => {
      this.contenidoConsola = texto;
    })
  }

  getData(){
    //retorne informacion
    //this.dataService.getData().subscribe(
    this.dataService.getAnalisis().subscribe(
      //(res)=>{
      (res:any)=>{ //para poder retornar el incremental
        //console.log(res);
        //alert(res.incremental);
        //this.resultado = res.incremental + 1;
        //this.contenidoConsola = (res.incremental + 1);
        //this.contenidoConsola = res.incremental;

        let arreglo:Array<any> = res.analisis;

        for(let val of arreglo){
          this.contenidoConsola += "El valor de la expresion es: " + val + "\n";
        }

        //this.contenidoConsola = res.analisis;
      }, 
      (err)=> {
        console.log(err);
      }
    )
  }

}
