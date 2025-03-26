import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FronteggAuthService } from '@frontegg/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private fronteggAuthService: FronteggAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fronteggAuthService.isAuthenticatedSubject.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/account']);
        }
      }
    );
  }

  login(): void {
    this.router.navigate(['/account/login']);
  }
}
