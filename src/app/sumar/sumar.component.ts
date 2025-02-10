import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sumar',
  imports: [FormsModule],
  templateUrl: './sumar.component.html',
  styleUrl: './sumar.component.css'
})
export class SumarComponent {
  titulo = 'Sumar';
  resultado = 0;
input1: number=0;
input2: number=0;
  sumar(input1: number, input2: number): number {
    return this.resultado = input1 + input2;
  }
}
