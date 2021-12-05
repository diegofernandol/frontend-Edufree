import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProgramasComponent } from './programas/programas.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PacademicosComponent } from './pacademicos/pacademicos.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent //ruta raiz
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'programas', component: ProgramasComponent
  },
  {
    path: 'administradores', component: AdministradoresComponent
  },
  {
    path: 'estudiantes', component: EstudiantesComponent
  },
  {
    path: 'pacademicos', component: PacademicosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
