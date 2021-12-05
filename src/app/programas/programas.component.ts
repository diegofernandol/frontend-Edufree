import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';

interface Programa {
  nombre: string;
  modalidad: string;
  creditos: string;
}

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {

  listaProgramas: Programa[] = [];

  /*listaProgramas = [
    {
      nombre: 'Ingeniería de Sistemas',
      descripcion: 'La carrea del futuro',
      urlImage: '/assets/images/ingenieriasistemas1.jpg'
    },
    {
      nombre: 'Admninistración de Empresas',
      descripcion: 'La carrea del futuro',
      urlImage: ''
    },
    {
      nombre: 'Ingeniría Industrial',
      descripcion: 'La carrea del futuro',
      urlImage: ''
    }
  ]*/
  
  
  constructor(private servicioBackend: BackendService) { 
    
    const ruta = "http://localhost:3000/programas";
    this.servicioBackend.getRequest('programas').subscribe( {
    
      next: (datos)=>{
        this.listaProgramas = datos;
      },
      error: (e)=> {
        console.log(e);
      },
      complete: ()=>{

      }
    })
    /*this.getProgramas(ruta).subscribe(
      (response) => {
        console.log(response);
        this.listaProgramas = response;
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    )*/
  }

  ngOnInit(): void {
  }

  /*getProgramas(ruta: string): Observable<any> {

    return this.http.get(ruta);

  }*/

}
