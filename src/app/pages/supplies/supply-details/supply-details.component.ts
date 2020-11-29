import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Supply } from 'src/app/models/supply';
import { SuppliesService } from 'src/app/services/supplies.service';

@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.scss']
})
export class SupplyDetailsComponent implements OnInit, OnDestroy {

  mode = 'new';
  title = 'cargando';

  supply: Supply;

  paramSubscription: Subscription;

  constructor(
    private service: SuppliesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (params.id) {
        this.mode = 'view';
        this.title = 'Detalles del surtido';
        this.service.find(params.id).then(supply => this.supply = supply)
          .catch(err => console.log(err));
      } else {
        this.mode = 'new';
        this.title = 'Nuevo surtido';
        this.supply = {
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
      this.service.create(this.supply).then(created => {
        this.mode = 'view';
        this.router.navigateByUrl(`/supplies/${created.id}`);
      });
    } else {
      this.mode = 'wait';
      this.service.update(this.supply).then(updated => {
        this.mode = 'view';
        this.router.navigateByUrl(`/supplies/${updated.id}`);
      });
    }
  }

  delete(): void {
    this.mode = 'wait';
    this.service.delete(this.supply).then(() => {
      this.router.navigateByUrl('/supplies');
    });
  }

  cancel(): void {
    if (this.mode === 'edit') {
      this.mode = 'view';
    } else {
      this.router.navigateByUrl('/supplies');
    }
  }

  allowEdit = () => ['new', 'edit'].includes(this.mode);
}
