import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Restaurantes';
  public programas: Array<string>;
  public elemento: string;
  public fecha = new Date(1990, 6, 27);

  constructor(){
    this.programas = ["Sublime Text"];
  }

  addElement(){
    this.programas.push(this.elemento);
  }
}
