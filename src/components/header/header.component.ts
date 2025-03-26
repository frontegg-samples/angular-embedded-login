import { Component, OnInit } from '@angular/core';
import { FronteggAuthService } from '@frontegg/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private fronteggAuthService: FronteggAuthService,
  ) {}

  ngOnInit(): void {
    this.fronteggAuthService?.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  logout() {
    this.fronteggAuthService.logout();
  }
}
