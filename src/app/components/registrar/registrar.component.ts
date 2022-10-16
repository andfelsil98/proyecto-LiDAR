import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';

//importamos el servicio para crear usuarios
import { CreateUserService } from 'src/app/services/create-user.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public loginForm: FormGroup;
  nombre = '';
  control = '';
  // usuario = '';



  constructor(
    public formBuilder: FormBuilder,
    private navbar: NavbarService,
    public createUserService: CreateUserService
  ) {
    this.loginForm = formBuilder.group({});
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    // console.log(this.loginForm);
  }

  submit() {
    this.createUserService.createUser(this.loginForm.value)
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
