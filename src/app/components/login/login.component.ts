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
  nombre = '';
  control = '';
  usuario = '';
  // result = '';
  users: any;
  validar: boolean = false;

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
    .subscribe(data=> {
      this.users = data;
      console.log(data);
      //const { user } = data[0];
      //console.log(user);
      //if (this.loginForm.value.user === this.users){
        //console.log("entro")
        //this.validar = true
      //} else {
      //  console.log("no entro")
      //}
    })
    this.navbar.recibirDatos(this.loginForm.value.user)
  }

  // registeredUser() {
  //   this.usuario = 'registrado';
  //   // this.loginForm.value.user = '';
  // }

  // rtnLogin() {
  //   this.usuario = '';
  // }
//getters
  get userField() {
    return this.loginForm.get('user');
  }
  get emailField() {
    return this.loginForm.get('email');
  }

}
