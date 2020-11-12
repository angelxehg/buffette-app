import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.scss']
})
export class SaleDetailsComponent implements OnInit, OnDestroy {

  mode = 'new';
  title = 'cargando';

  sale: Sale;

  paramSubscription: Subscription;

  constructor(
    private service: SalesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (params.id) {
        this.mode = 'view';
        this.title = 'Detalles de la venta';
        this.service.find(params.id).then(sale => this.sale = sale)
          .catch(err => console.log(err));
      } else {
        this.mode = 'new';
        this.title = 'Nueva venta';
        this.sale = {
          id: 0,
          date: '',
          by: '',
          amount: 25
        };
      }
    });
  }

  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

  save(): void {
    if (this.mode === 'new') {
      this.mode = 'wait';
      this.service.create(this.sale).then(created => {
        this.mode = 'view';
        this.router.navigateByUrl(`/sales/${created.id}`);
      });
    } else {
      this.mode = 'wait';
      this.service.update(this.sale).then(updated => {
        this.mode = 'view';
        this.router.navigateByUrl(`/sales/${updated.id}`);
      });
    }
  }

  delete(): void {
    this.mode = 'wait';
    this.service.delete(this.sale).then(() => {
      this.router.navigateByUrl('/sales');
    });
  }

  cancel(): void {
    if (this.mode === 'edit') {
      this.mode = 'view';
    } else {
      this.router.navigateByUrl('/sales');
    }
  }

  allowEdit = () => ['new', 'edit'].includes(this.mode);

}
