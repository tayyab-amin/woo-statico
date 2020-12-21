import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  errorMessage: string = '';
  // user: any;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public afs: AngularFirestore
  ) {}
  /**************************************************************** */
  async tryRegister(value: any) {
    console.log(value);
    return new Promise<any>((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((res) => {
          return this.afs.collection('users').doc().set({
            email: value.email,
            password: value.password,
          });
        })
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }
  /****************************************************************************** */
  trylogin(value: any) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password).then(
        (res) => {
          console.log('res', res);
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          // console.error(err.message);
          // this.errorMessage = err.message;
          // console.log(this.errorMessage);
          return reject(err);
        }
      );
    });
  }
  /************************************************************************************************ */
  forgetPassword(email: any) {
    return new Promise<any>((resolve, reject) => {
      return this.afAuth.sendPasswordResetEmail(email);
    });
  }
}
