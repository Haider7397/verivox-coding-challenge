import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TariffListComponent } from './tariff-list.component';
import { TariffService } from '../../services/tariff.service';
import { SortPipe } from '../../pipes/sort.pipe';
import { Tariff } from '../../models';
import { of } from 'rxjs';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let tariffServiceSpy: jasmine.SpyObj<TariffService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, TariffListComponent],
      providers: [TariffService, SortPipe]
    })
    .compileComponents();

    
    tariffServiceSpy = TestBed.inject(TariffService) as jasmine.SpyObj<TariffService>;
    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
