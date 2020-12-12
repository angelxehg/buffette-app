import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inventory } from 'src/app/models/inventory';
import { InventoriesService } from 'src/app/services/inventories.service';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.scss']
})
export class InventoryDetailsComponent implements OnInit, OnDestroy {

  mode = 'new';
  title = 'cargando';

  inventory: Inventory;

  areas = [
    {
      name: "Refrigerados",
      by: "Angel Hurtado"
    },
    {
      name: "Cereales",
      by: "Angel Hurtado"
    },
    {
      name: "Enlatados",
      by: "Angel Hurtado"
    }
  ]

  areasOk = false;

  products = [
    {
      name: "Producto 1",
      current: 0,
      stock: 46
    },
    {
      name: "Producto 2",
      current: 0,
      stock: 15
    },
    {
      name: "Producto 3",
      current: 0,
      stock: 63
    },
    {
      name: "Producto 4",
      current: 0,
      stock: 47
    }
  ];

  productsOk = false;

  paramSubscription: Subscription;

  constructor(
    private service: InventoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (params.id) {
        this.mode = 'view';
        this.title = 'Detalles del inventario';
        this.service.find(params.id).then(inventory => this.inventory = inventory)
          .catch(err => console.log(err));
      } else {
        this.mode = 'new';
        this.title = 'Nuevo inventario';
        this.inventory = {
          id: 0,
          date: ''
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
      this.service.create(this.inventory).then(created => {
        this.mode = 'view';
        this.router.navigateByUrl(`/inventories/${created.id}`);
      });
    } else {
      this.mode = 'wait';
      this.service.update(this.inventory).then(updated => {
        this.mode = 'view';
        this.router.navigateByUrl(`/inventories/${updated.id}`);
      });
    }
  }

  delete(): void {
    this.mode = 'wait';
    this.service.delete(this.inventory).then(() => {
      this.router.navigateByUrl('/inventories');
    });
  }

  cancel(): void {
    if (this.mode === 'edit') {
      this.mode = 'view';
    } else {
      this.router.navigateByUrl('/inventories');
    }
  }

  allowEdit = () => ['new', 'edit'].includes(this.mode);

}
