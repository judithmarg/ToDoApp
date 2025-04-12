import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola a todo el mundo';
  tasks = [
    'Instalar angular cli',
    'crear proyecto',
    'crear componentes',
    'crear servicios',
  ]
}
