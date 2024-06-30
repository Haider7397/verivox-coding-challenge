import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './components/loader/loader.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TariffListComponent, FontAwesomeModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'verivox-coding-challenge';
}
