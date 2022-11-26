import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  checked = false;
  checked2 = true;
  constructor() { }

  ngOnInit(): void {
  }

  aceptaTerminos() {
    if(this.checked2 == true){
      this.checked2=false;
    } else{
      this.checked2=true;
    }
  }
  

}
