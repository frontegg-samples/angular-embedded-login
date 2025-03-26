import { Component } from '@angular/core';
import { FronteggAppService } from '@frontegg/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = true;
  loadingSubscription: Subscription;

  constructor(
    private fronteggAppService: FronteggAppService
  ) {
    this.loadingSubscription = fronteggAppService.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
