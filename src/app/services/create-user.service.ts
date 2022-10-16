import { Injectable } from '@angular/core';

//firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
//interfaces
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  //metodo para crear
  createUser(user: Usuarios) {
    return new Promise<any> (( resolve, reject ) => {
      this.angularFirestore
        .collection("login")
        .add(user)
        .then ( response => {
          console.log(response)
        }, error => {
          reject (error)
        })
    })
  }

  getPosts() {
    return this.angularFirestore
      .collection("login",ref => ref.where('user', '==', true)).get();
      // .snapshotChanges() //esto captura el estado actual de la coleccion en firestore
  }

  getUsers(user:string) {
    return this.angularFirestore
      .collection("login", ref => ref.where("user", "==", user))
      .valueChanges();
  }
}
