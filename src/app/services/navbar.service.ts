import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  recibirDatos(e:any) {
    // console.log(e)
    this.change.emit(e);
  }
}
