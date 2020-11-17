import { Component, OnInit } from '@angular/core';
import { InventoriesService } from 'src/app/services/inventories.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent implements OnInit {

  items = this.service.items$;

  constructor(private service: InventoriesService) { }

  ngOnInit(): void {
    this.service.index().then();
  }

}
