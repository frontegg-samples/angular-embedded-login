import { Component } from '@angular/core';
import { ContextHolder, FronteggAppService } from '@frontegg/angular';
import { Subscription } from 'rxjs';

const DEFAULT_SANDBOX_CONTEXT = {
  baseUrl: 'https://sandbox.frontegg.com',
  clientId: '9af126b9-c35f-4e2d-a3f1-c261e22aaf4a',
  appId: 'xxxx',
};

@Component({
  selector: 'app-signup-banner',
  templateUrl: './signup-banner.component.html',
  styleUrls: ['./signup-banner.component.css'],
})
export class SignupBannerComponent {
  isDefaultCredentials = false;
  loadingSubscription: Subscription;

  constructor(private fronteggAppService: FronteggAppService) {
    this.loadingSubscription = this.fronteggAppService.isLoading$.subscribe(
      (isLoading) => {
        if (isLoading) return;
        const baseUrl = ContextHolder.for(undefined as any).getContext().baseUrl;
        const clientId = ContextHolder.for(undefined as any).getContext().clientId;
        this.isDefaultCredentials =
          baseUrl === DEFAULT_SANDBOX_CONTEXT.baseUrl &&
          clientId === DEFAULT_SANDBOX_CONTEXT.clientId;
      }
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
