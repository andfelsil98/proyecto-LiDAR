import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  recibirDatos(e:any) {
    console.log("entro al servicio",e)
    this.change.emit(e);
  }

  mostrarDatos(e:any) {
    console.log("entro al servicio",e)
    this.change.emit(e);
  }
}
