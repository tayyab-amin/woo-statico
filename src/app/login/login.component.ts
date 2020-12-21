import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
    cnfrmpassword: '',
  };

  /******************************************************************************************************* */
  errorMessage: string = '';
  successMessage: string = '';

  //
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  // loginForm: NgForm;

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.',
      },
    ],
  };
  /*********************************************************************************************************** */
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public authService: AuthService
  ) // private formBuilder: FormBuilder
  {}

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   email: new FormControl(
    //     '',
    //     Validators.compose([
    //       Validators.required,
    //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    //     ])
    //   ),
    //   password: new FormControl(
    //     '',
    //     Validators.compose([
    //       // Validators.minLength(5),
    //       Validators.required,
    //     ])
    //   ),
    // });
  }

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
