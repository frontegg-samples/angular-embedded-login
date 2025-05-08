import { Component, OnInit } from '@angular/core';
import { FronteggAuthService } from '@frontegg/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private fronteggAuthService: FronteggAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fronteggAuthService?.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  logout() {
    this.fronteggAuthService.logout();
    this.router.navigate(['/']);
  }
}
