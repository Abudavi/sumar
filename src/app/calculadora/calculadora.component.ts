import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-calculadora',
  imports: [FormularioComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  resultado:number=0;
  procesarResultado(event : number){
    this.resultado=event;
  }
}
