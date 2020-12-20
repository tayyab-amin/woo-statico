import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  user = {
    email: '',
  };

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  async forgetPassword(value: any) {
    this.authService.forgetPassword(value.email);
  }
}
