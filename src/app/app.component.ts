import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TariffListComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'verivox-coding-challenge';
}
