import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent {

  isLoading$ = this.loadingSvc.isLoading$;
  constructor(private loadingSvc: LoadingService) { }

}
