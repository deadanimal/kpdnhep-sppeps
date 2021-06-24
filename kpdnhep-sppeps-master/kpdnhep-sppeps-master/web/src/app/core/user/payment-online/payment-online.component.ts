import { Component, OnInit } from '@angular/core';
import { W3csService } from './../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-payment-online',
  templateUrl: './payment-online.component.html',
  styleUrls: ['./payment-online.component.scss']
})
export class PaymentOnlineComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private modalService: BsModalService,
    private router: Router,
  ) { }

  route: Router;

  // CSS class
  fontSize: string;
  fontColor: string;


  ngOnInit(): void {

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;

  onSubmit(template) {
    this.modalRef = this.modalService.show(template);
  }


  //close modal
  closeModal() {
    this.modalRef.hide();
    this.router.navigate(['/user/user-portal'])
  }
  // closeModal2() {
  //   this.modalRef2.hide();
  //   this.router.navigate(['core/user/application-status'])
  // }

  //navigate page
  // navigate(){
  //   this.router.navigate(['core/user/user-portal'])
  // }
}
