import {Component, OnInit} from '@angular/core';
import { Alumno } from 'src/app/interface/alumno.interface';

 const ELEMENT_DATA: Alumno[] = [
    {id: 1, nombre: 'Rogelio', apellidos: 'Mohigefer Barrera', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 2, nombre: 'José Luis', apellidos: 'Hidalgo', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 3, nombre: 'José Luis', apellidos: 'Gil', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 4, nombre: 'Nacho', apellidos: 'Moreno', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 5, nombre: 'Carlos', apellidos: 'Durbán', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 6, nombre: 'Álvaro', apellidos: 'Franco', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 7, nombre: 'David', apellidos: 'García', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 8, nombre: 'Víctor', apellidos: 'González', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 9, nombre: 'Maylor', apellidos: 'Nosequé', fechaNacimiento: '09/06/1989', curso: '2º DAM'},
    {id: 10, nombre: 'Titín', apellidos: 'Tola', fechaNacimiento: '09/06/1989', curso: '2º DAM'}
  ];
  
@Component({
  selector: 'app-table-alumnos',
  styleUrls: ['table-alumnos.component.css'],
  templateUrl: 'table-alumnos.component.html',
})
export class TableAlumnosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'fechaNacimiento', 'curso'];
  dataSource = ELEMENT_DATA; 
  checkedId=true;
  checkedNombre=true;
  checkedApellidos=true;
  checkedFN=true;
  checkedCurse=true;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.checkedId)
  }
  
  checkeaId(){
    if(this.checkedId==true){
      this.checkedId=false;
    }else{
      this.checkedId=true;
    }
  }

  checkeaNombre(){
    if(this.checkedNombre==true){
      this.checkedNombre=false;
    }else{
      this.checkedNombre=true;
    }
  }

  checkeaApellidos(){
    if(this.checkedApellidos==true){
      this.checkedApellidos=false;
    }else{
      this.checkedApellidos=true;
    }
  }

  checkeaFN(){
    if(this.checkedFN==true){
      this.checkedFN=false;
    }else{
      this.checkedFN=true;
    }
  }

  checkeaCurse(){
    if(this.checkedCurse==true){
      this.checkedCurse=false;
    }else{
      this.checkedCurse=true;
    }
  }
}