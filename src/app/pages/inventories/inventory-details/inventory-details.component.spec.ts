import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InventoriesService, InventoriesServiceMock } from 'src/app/services/inventories.service';

import { InventoryDetailsComponent } from './inventory-details.component';

describe('InventoryDetailsComponent', () => {
  let component: InventoryDetailsComponent;
  let fixture: ComponentFixture<InventoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryDetailsComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: InventoriesService, useValue: InventoriesServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
