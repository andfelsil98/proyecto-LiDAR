import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  min = 0;
  max = 0;
  turbiedad = 0;
  usuario: string | boolean='';
  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {

    this.navbar.change
    .subscribe(data => {
      console.log(`hola ${data}`)
      this.usuario = data;
    })
  }





}
