import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import {
  NgbModal,
  NgbNavModule,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  domain: any;
  apiKey: any;
  websiteName: any;
  apiSecret: any;
  constructor(private modalService: NgbModal, private afs: AngularFirestore) {}

  /****************************************************************************************************************** */
  open(content: any) {
    console.log(content);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  /********************************************************************************************************** */
  tryAddAPI(value: any) {
    const id = value.devicename;
    const ref = this.afs.collection('Domains').doc(id);
    ref.set({
      websiteName: value.websiteName,
      domain: value.domain,
      apiKey: value.apiKey,
      apiSecret: value.apiSecret,
    });
    console.log(value);
  }

  ngOnInit(): void {}
}
