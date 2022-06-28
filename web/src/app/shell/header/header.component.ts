import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '@app/@shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private titleService: Title,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.SignOut();
  }

  login() {
    this.router.navigate(['sign-in']);
  }

  get username(): string | null {
    var user = this.authService.GetUser();
    if(user) return user.displayName;
    return null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
