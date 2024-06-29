import { Component, EventEmitter, Output } from '@angular/core';
import { Tariff } from '../../models';

@Component({
  selector: 'app-tariff-filter',
  standalone: true,
  imports: [],
  templateUrl: './tariff-filter.component.html',
  styleUrl: './tariff-filter.component.scss'
})
export class TariffFilterComponent {
  @Output() sortChange = new EventEmitter<keyof Tariff>();

  emitSortChange(attribute: keyof Tariff): void {
    this.sortChange.emit(attribute);
  }
}
