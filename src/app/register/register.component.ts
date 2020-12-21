import { Component, OnInit } from '@angular/core';
/********************************************************************************************************** */

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
/*********************************************************************************************************** */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;\
  errorMessage: string = '';
  successMessage: string = '';

  user = {
    email: '',
    password: '',
    cnfrmpassword: '',
  };
  /************************************************************************************************ */
  // validation_messages = {
  //   email: [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Enter a valid email.' },
  //   ],
  //   password: [
  //     { type: 'required', message: 'Password is required.' },
  //     {
  //       type: 'minlength',
  //       message: 'Password must be at least 6 characters long.',
  //     },
  //   ],
  // };

  /************************************************************************************************* */
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  async tryRegister(value: any) {
    if (value.password === value.cnfrmpassword) {
      this.authService.tryRegister(value).then(
        (res) => {
          this.errorMessage = '';
          this.successMessage = 'Your account has been created. Please log in.';
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
}
