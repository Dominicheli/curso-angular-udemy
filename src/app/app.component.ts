import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewComponentComponent],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de Angular</h1>
    <app-new-component />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
