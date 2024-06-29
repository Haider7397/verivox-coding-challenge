import { Component } from '@angular/core';
import { Tariff } from '../../models';
import { TariffService } from '../../services/tariff.service';
import { TariffFilterComponent } from '../tariff-filter/tariff-filter.component';
import { NgFor, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faDownload, faRightLong, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-tariff-list',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, NgIf, TariffFilterComponent, SortPipe],
  templateUrl: './tariff-list.component.html',
  styleUrl: './tariff-list.component.scss',
})
export class TariffListComponent {
  tariffs: Tariff[] = [];
  sortAttribute: keyof Tariff = 'price';
  faDownload = faDownload;
  faUpload = faUpload;
  faRightLong = faRightLong;
  faCheck = faCheck;

  constructor(private tariffService: TariffService) { }

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe(data => {
      this.tariffs = data;
    });
  }


  onSortChange(attribute: keyof Tariff): void {
    this.sortAttribute = attribute;
  }
}
