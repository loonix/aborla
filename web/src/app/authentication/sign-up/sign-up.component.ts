import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/@shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}


  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
