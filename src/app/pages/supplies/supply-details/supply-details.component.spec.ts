import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SuppliesService, SuppliesServiceMock } from 'src/app/services/supplies.service';

import { SupplyDetailsComponent } from './supply-details.component';

describe('SupplyDetailsComponent', () => {
  let component: SupplyDetailsComponent;
  let fixture: ComponentFixture<SupplyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplyDetailsComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: SuppliesService, useValue: SuppliesServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
