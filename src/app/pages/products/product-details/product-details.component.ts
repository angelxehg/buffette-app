import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  mode = 'new';
  title = 'cargando';

  product: Product;

  paramSubscription: Subscription;

  constructor(
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (params.id) {
        this.mode = 'view';
        this.title = 'Detalles del producto';
        this.service.find(params.id).then(product => this.product = product)
          .catch(err => console.log(err));
      } else {
        this.mode = 'new';
        this.title = 'Registrar un producto';
        this.product = {
          id: 0,
          code: '',
          title: '',
          brand: '',
          existencias: 0
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
      this.mode = 'view';
      this.service.create(this.product).then(created => {
        this.router.navigateByUrl(`/products/${created.code}`);
      });
    } else {
      this.mode = 'view';
      this.service.update(this.product).then(updated => {
        this.router.navigateByUrl(`/products/${updated.code}`);
      });
    }
  }

  delete(): void {
    this.mode = 'view';
    this.service.delete(this.product).then(() => {
      this.router.navigateByUrl('/products');
    });
  }

  cancel(): void {
    if (this.mode === 'edit') {
      this.mode = 'view';
    } else {
      this.router.navigateByUrl('/products');
    }
  }

  allowEdit = () => ['new', 'edit'].includes(this.mode);
}
