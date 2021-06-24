import { Component, OnInit } from '@angular/core';
import { W3csService } from './../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

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

  //variable
  formCheck: boolean = true;

  ngOnInit(): void {

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );
  }

  formActive() {
    this.formCheck = false;
  }

  formDeactive() {
    this.formCheck = true;
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  onSubmit(template) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      {
        // class: 'modal-dialog-centered',
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  manualPayment(template) {
    this.modalRef.hide();
    this.modalRef = this.modalService.show(template);
  }

  ConfirmManual(template) {
    this.modalRef.hide();
    this.modalRef2= this.modalService.show(template)
  }

  //close modal
  closeModal() {
    this.modalRef.hide();
    this.router.navigate(['/user/payment-online'])
  }
  closeModal2() {
    this.modalRef.hide();
  }
  closeModal3() {
    this.modalRef2.hide();
    this.router.navigate(['/user/application-status'])
  }

  //navigate page
  // navigate(){
  //   this.router.navigate(['core/user/user-portal'])
  // }
}


