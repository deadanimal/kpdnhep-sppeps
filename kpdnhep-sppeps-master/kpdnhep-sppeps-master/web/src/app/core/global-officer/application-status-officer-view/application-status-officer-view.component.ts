import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";


@Component({
  selector: 'app-application-status-officer-view',
  templateUrl: './application-status-officer-view.component.html',
  styleUrls: ['./application-status-officer-view.component.scss']
})
export class ApplicationStatusOfficerViewComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

  public show:boolean = false;
  public buttonName:any = 'Show';


  //hide and show div
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;


  action: string;

  onSubmit(template,template2) {
    this.action = (<HTMLInputElement>document.getElementById('action')).value;

    console.log("aaaaaaa",this.action)

    if(this.action == "Diluluskan"){
      this.modalRef = this.modalService.show(template);
    }
    else if (this.action == "Tidak Diluluskan"){
      this.modalRef = this.modalService.show(template2);
    }
    
  }

  ConfirmApprove(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  ConfirmNotApprove(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }


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
    this.router.navigate(['core/approving-officer/approved-list']);
  }
  // closeModal3() {
  //   this.modalRef3.hide();
  //   this.router.navigate(['core/agency-pdrm/application-information'])
  // }
}
