import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumarComponent } from "./sumar/sumar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SumarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sumar';
}
