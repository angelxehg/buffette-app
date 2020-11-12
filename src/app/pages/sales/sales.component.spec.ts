import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesService, SalesServiceMock } from 'src/app/services/sales.service';

import { SalesComponent } from './sales.component';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesComponent],
      providers: [
        { provide: SalesService, useValue: SalesServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
