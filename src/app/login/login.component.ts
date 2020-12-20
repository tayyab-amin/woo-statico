import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  successMessage: string = '';

  user = {
    email: '',
    password: '',
    cnfrmpassword: '',
  };
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  /************************************************************************************ */
  async trylogin(value: any) {
    this.authService.trylogin(value).then(
      (res) => {
        this.errorMessage = '';
        this.successMessage = '.';
        setTimeout(() => {
          this.successMessage = '';
        }, 4000);
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      }
    );
  }
}
