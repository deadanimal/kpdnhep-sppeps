import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-approved-information',
  templateUrl: './approved-information.component.html',
  styleUrls: ['./approved-information.component.scss']
})
export class ApprovedInformationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

  public show: boolean = false;
  public buttonName: any = 'Show';


  //hide and show div
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  modalRef4: BsModalRef;


  action: string;

  onSubmit(template, template2) {
    this.action = (<HTMLInputElement>document.getElementById('action')).value;

    console.log("aaaaaaa", this.action)

    // this.modalRef = this.modalService.show(template);

    if (this.action == "Cetak Permit") {
      this.PrintPermit(template)
    }
    else if (this.action == "Kemaskini Bayaran") {
      this.modalRef = this.modalService.show(template2,
        { class: 'modal-lg' }
      );
    }
  }

  PrintPermit(template) {
    this.modalRef = this.modalService.show(template);
  }

  ConfirmPrint(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  Pay(template){
    this.closeModal();
    this.modalRef3 = this.modalService.show(template);
  }

  confirmPay(template) {
    this.closeModal3();
    this.modalRef4 = this.modalService.show(template);
  }

  // ConfirmNotApprove(template) {
  //   this.closeModal();
  //   this.modalRef2 = this.modalService.show(template);
  // }


  // confirm(template) {
  //   this.closeModal2();
  //   // this.closeModal2();
  //   this.modalRef3 = this.modalService.show(template,
  //     {
  //       // class: 'modal-dialog-centered',
  //       ignoreBackdropClick: true,
  //       keyboard: true,
  //       backdrop: true
  //     }
  //   );
  // }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
    this.router.navigate(['core/state-processing-officer/state-completed-list']);
  }
  closeModal3() {
    this.modalRef3.hide();
    // this.router.navigate(['core/state-processing-officer/state-completed-list'])
  }
  closeModal4() {
    this.modalRef4.hide();
    this.router.navigate(['core/state-processing-officer/state-completed-list'])
  }
  
}
