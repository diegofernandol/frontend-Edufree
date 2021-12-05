import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface Usuario {
  correo: string,
  contrasena: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin: any;

  //usuario: Usuario = { correo: '', contrasena: ''};

  constructor(private formBuilder: FormBuilder) { 
    
    this.formLogin = this.formBuilder.group(
      {
        correo: ['', Validators.required],
        contrasena: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }
  
  autenticar(): void {

    //mostrarInfo(): void {
    //alert("datos: " + this.usuario.contrasena);
    //const contrasena = Md5.hashStr(this.usuario.contrasena);

    const contrasena = Md5.hashStr(this.formLogin.controls.contrasena.value);
    
    const json = this.formLogin.getRawValue();
    
    alert("datos: " + JSON.stringify(json));

  }

}
