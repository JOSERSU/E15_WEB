import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  n1: number = 0;
  n2: number = 0;
  r: number = 0;

  sumar(): void {
    this.r = this.n1 + this.n2
  }

  restar(): void {
    this.r = this.n1 - this.n2
  }

  multiplicar(): void {
    this.r = this.n1 * this.n2
  }

  dividir(): void {
    this.r = this.n1 / this.n2
  }

}
