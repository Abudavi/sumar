import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  titulo="Calculadora"
  operadorA:number | null=null;
  operadorB:number | null=null;
  @Output() resultadoSuma = new EventEmitter<number>();
  sumar(){
    if(this.operadorA&& this.operadorB){
      let resultado=this.operadorA+this.operadorB;
      this.resultadoSuma.emit(resultado);
    }else{
      alert('ingrese un valor valido');
    }

  }
}
