import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Restaurantes';

  public programas: Array<string>;
  public elemento: string;

  constructor(){
    this.programas = ["Sublime Text"];
  }

  addElement(){
    this.programas.push(this.elemento);
  }
}
