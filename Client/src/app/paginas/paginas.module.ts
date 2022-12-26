import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReporteASTComponent } from './reporte-ast/reporte-ast.component';
import { ReporteErroresComponent } from './reporte-errores/reporte-errores.component';
import { ReporteTSComponent } from './reporte-ts/reporte-ts.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    HomeComponent,
    ReporteASTComponent,
    ReporteErroresComponent,
    ReporteTSComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PaginasModule { }
