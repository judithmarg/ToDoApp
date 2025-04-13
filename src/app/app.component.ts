import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola a todo el mundo';
  tasks = [
    'Instalar angular cli',
    'crear proyecto',
    'crear componentes',
    'crear servicios',
  ];
  private pruebita = 'No puedes acceder a esta info.'
}
