import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  items = this.service.items$;

  constructor(private service: SalesService) { }

  ngOnInit(): void {
    this.service.index().then();
  }

}
