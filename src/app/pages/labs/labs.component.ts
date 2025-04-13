import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
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
  ];
  name = 'Judith';
  disabled = true;
  image = "https://m.media-amazon.com/images/I/51kYPJJl3IL.jpg";

  person = {
    name: 'Evelin',
    age: '22',
    country: 'Bolivia',
  }
}
