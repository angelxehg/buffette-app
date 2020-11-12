import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService, ProductsServiceMock } from 'src/app/services/products.service';

import { SaleDetailsComponent } from './sale-details.component';

describe('SaleDetailsComponent', () => {
  let component: SaleDetailsComponent;
  let fixture: ComponentFixture<SaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [SaleDetailsComponent],
      providers: [
        { provide: ProductsService, useValue: ProductsServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
