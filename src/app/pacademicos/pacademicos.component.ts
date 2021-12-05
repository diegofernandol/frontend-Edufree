import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Pacademico {
  nombre: string;
  modalidad: string;
  creditos: string;
}

@Component({
  selector: 'app-pacademicos',
  templateUrl: './pacademicos.component.html',
  styleUrls: ['./pacademicos.component.scss']
})

export class PacademicosComponent implements OnInit {

  listaPacademicos: Pacademico[] = [];

  constructor(private http: HttpClient) { 
    const ruta = "http://localhost:3000/programas";
    this.getProgramas(ruta).subscribe(
      (response) => {
        console.log(response);
        this.listaPacademicos = response;
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    )
  }

  ngOnInit(): void {
  }

  getProgramas(ruta: string): Observable<any> {

    return this.http.get(ruta);

  }

}
