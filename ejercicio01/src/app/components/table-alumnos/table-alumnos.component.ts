import {Component} from '@angular/core';

export interface Alumno {
  nombre: string;
  id: number;
  apellidos: string;
  fechaNacimiento: string;
  curso: string;
}

const ELEMENT_DATA: Alumno[] = [
  {id: 1, nombre: 'Rogelio', apellidos: 'Mohigefer Barrera', fechaNacimiento: 'H', curso: '2º DAM'},
  {id: 2, nombre: 'José Luis', apellidos: 'Hidalgo', fechaNacimiento: 'He', curso: '2º DAM'},
  {id: 3, nombre: 'José Luis', apellidos: 'Gil', fechaNacimiento: 'Li', curso: '2º DAM'},
  {id: 4, nombre: 'Nacho', apellidos: 'Moreno', fechaNacimiento: 'Be', curso: '2º DAM'},
  {id: 5, nombre: 'Carlos', apellidos: 'Durbán', fechaNacimiento: 'B', curso: '2º DAM'},
  {id: 6, nombre: 'Álvaro', apellidos: 'Franco', fechaNacimiento: 'C', curso: '2º DAM'},
  {id: 7, nombre: 'David', apellidos: 'García', fechaNacimiento: 'N', curso: '2º DAM'},
  {id: 8, nombre: 'Víctor', apellidos: 'González', fechaNacimiento: 'O', curso: '2º DAM'},
  {id: 9, nombre: 'Maylor', apellidos: 'Nosequé', fechaNacimiento: 'F', curso: '2º DAM'},
  {id: 10, nombre: 'Titín', apellidos: 'Tola', fechaNacimiento: 'Ne', curso: '2º DAM'}
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'app-table-alumnos',
  styleUrls: ['table-alumnos.component.css'],
  templateUrl: 'table-alumnos.component.html',
})
export class TableAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'fechaNacimiento', 'curso'];
  dataSource = ELEMENT_DATA;
}