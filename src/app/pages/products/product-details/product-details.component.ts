import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  mode = 'new';
  title = 'cargando';

  product: Product;

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.product = {
      id: 0,
      code: '',
      title: '',
      brand: '',
      existencias: 0
    };
    this.mode = 'new';
    this.title = 'Registrar producto';
  }

  save(): void {
    this.mode = 'view';
    this.service.create(this.product).then(product => {
      this.router.navigateByUrl('products');
    });
  }

  allowEdit = () => ['new', 'edit'].includes(this.mode);
}
