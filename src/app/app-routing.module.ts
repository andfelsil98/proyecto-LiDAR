import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components importados
import { InicioComponent } from './components/inicio/inicio.component'
import { LoginComponent } from './components/login/login.component'
import { PruebasComponent } from './components/pruebas/pruebas.component'
import { RegistrarComponent } from './components/registrar/registrar.component'

const routes: Routes = [
  {//para el caso en que quiera que se cargue por defecto el home con la ruta 'home' y no '' hay que crear estas lineas para redirigir el path '' al path 'home'
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: 'inicio', component:InicioComponent },
  { path: 'login', component:LoginComponent },
  { path: 'pruebas', component:PruebasComponent },
  { path: 'registro', component:RegistrarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
