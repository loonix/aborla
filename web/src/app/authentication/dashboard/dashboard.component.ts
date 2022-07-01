import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/@shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isActive = true;

  user: any;
  constructor(public authService: AuthService) {
    this.user = this.authService.GetUser();
  }

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn);
    console.log(this.user);
  }
}
