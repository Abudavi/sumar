import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-calculadora',
  imports: [FormularioComponent, ResultadoComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  resultado:number| null=null;
  procesarResultado(event : number){
    this.resultado=event;
  }
}
