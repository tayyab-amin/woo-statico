import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  /****************************************************************************************************************** */
  open(content: any) {
    console.log(content);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    // .result.then(
    //   (result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   },
    //   (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   }
    // );
  }
  /********************************************************************************************************** */

  ngOnInit(): void {}
}
