import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

interface Usuario {
  nombre: string;
  apellidos: string;
  correo: string;
}

interface Estudiante {
  direccion: string;
  telefono: string;
}

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  listaUsuarios: Usuario[] = [];
  listaEstudiantes: Estudiante[] = [];

  constructor(private http: HttpClient) { 

    const ruta1 = "http://localhost:3000/usuarios";
    
    this.getUsuarios(ruta1).subscribe(
      (response) => {
        console.log(response);
        this.listaUsuarios = response;
      },
      (error) => {
        console.log(error);
      },
      () => {      }
    )

    const ruta2 = "http://localhost:3000/estudiantes";
    this.getEstudiantes(ruta2).subscribe(
      (response) => {
        console.log(response);
        this.listaEstudiantes = response;
      },
      (error) => {
        console.log(error);
      },
      () => {      }
    )
  }

  ngOnInit(): void {
  }

  getEstudiantes(ruta: string): Observable<any> {

    return this.http.get(ruta);

  }

  getUsuarios(ruta: string): Observable<any> {

    return this.http.get(ruta);

  }


  /*listaUsuarios = [];

  constructor(private servicioBackend: BackendService) {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.servicioBackend.getRequest('ususarios').subscribe(
      {
        next: (datos)=> {
          this.listaUsuarios = datos;
        },
        error: (e)=> {
          console.log(e);
        },
        complete: () => {

        }

      }
    )
  }*/

}
