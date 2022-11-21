import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  constructor() {}

  nombre: string = "";
  apellidos: string = "";
  email: string = "";
  dni: string = "";
  conocio: string = "";
  genero: string = "";
  telefono: number = 0;

  checked = false;

  ngOnInit(): void {
  }

  aceptaTerminos() {
    console.log(this.nombre, this.apellidos, this.dni, this.email, this.genero, this.conocio, this.telefono);
  }

}
