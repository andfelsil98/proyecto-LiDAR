import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
//importamos los modulos para formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';

//importamos el servicio para crear usuarios
import { CreateUserService } from 'src/app/services/create-user.service';

//importar interfaz
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  // nombre = '';
  // control = '';
  // usuario = '';
  // result = '';
  users: any;
  data_user: Usuarios | null = null;
  user: string = '';
  email: string = '';
  validar: number = 0;
  contenido: number = 0;

  constructor(
    public formBuilder: FormBuilder,
    private navbar: NavbarService,
    public createUserService: CreateUserService
  ) {
    this.loginForm = formBuilder.group({});
    this.buildForm();
  }

  ngOnInit(): void {

    // this.createUserService.getPosts()
    // .subscribe( res => {
    //   // this.posts = [{id:'1', 'title':'titulo de prueba', 'content': 'contenido de prueba', 'author':'Andres'}]
    //   this.users = res.map( e => {//en este punto estoy asignando a posts el id (payload.doc.id) y los datos (payload.doc.data)
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data() as {}
    //     }as Usuarios;
    //   });

    //   console.log(this.users)
    // });
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    // console.log(this.loginForm);
  }

  search() {
    this.createUserService.getUsers(this.loginForm.value.user)
    .subscribe( data => {
      // this.users = data;
      // console.log(data);
      this.contenido = data.length;
      if (data.length >0 ) { //con decir que data.length es mayor a cero ya estoy indicando indirectamente que si existe
        this.data_user = data[0] as Usuarios;
        // this.user = this.data_user.user;
        // if (this.user === this.loginForm.value.user){
        //   console.log('si EXISTEEEE')
        // } else {
        //   console.log("no es compatible")
        // }
        this.validar = 1;
        // console.log('si EXISTEE')
        // console.log(this.validar)
        // console.log(this.loginForm.value.user)
        console.log(this.data_user.email);
        this.user = this.loginForm.value.user

      } else {
        this.validar = 2;
        console.log('no existe')
      }

    })
  }

  ingreso() {
    this.validar = 0
    if (this.user){
      console.log(this.user)
      this.navbar.recibirDatos(this.user)
    }else {
      console.log('no hay nada')
      this.navbar.recibirDatos('');
    }

  }

  // removeval() {
  //   this.validar = 0;
  // }

//getters
  get userField() {
    return this.loginForm.get('user');
  }
  get emailField() {
    return this.loginForm.get('email');
  }

}
