import { Component, OnInit } from '@angular/core';
import { SuppliesService } from 'src/app/services/supplies.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss']
})
export class SuppliesComponent implements OnInit {

  items = this.service.items$;

  constructor(private service: SuppliesService) { }

  ngOnInit(): void {
    this.service.index().then();
  }

}
