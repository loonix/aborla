import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from '@app/@shared/services/auth.service';

@Component({
  selector: 'app-my-sidebar',
  templateUrl: './my-sidebar.component.html',
  styleUrls: ['./my-sidebar.component.scss']
})
export class MySidebarComponent implements OnInit {
  user: User;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.GetUser();
  }

}
