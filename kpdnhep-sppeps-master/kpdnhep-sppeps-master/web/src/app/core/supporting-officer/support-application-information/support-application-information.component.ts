import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-support-application-information',
  templateUrl: './support-application-information.component.html',
  styleUrls: ['./support-application-information.component.scss']
})
export class SupportApplicationInformationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private pentadbir: PentadbirService
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  public show:boolean = false;
  public buttonName:any = 'Show';
  id;

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

    if(this.action == "support"){
      this.modalRef = this.modalService.show(template);
    }
    else if (this.action == "notSupport"){
      this.modalRef = this.modalService.show(template2);
    }
    
  }
  catatan;
  tindakan;
  tempoh;

  ConfirmSupport(template) {
    let ff = new FormData();
    ff.append("tindakan", this.tindakan);
    ff.append("catatan", this.catatan);
    ff.append("tempoh", this.tempoh)

    this.pentadbir.updatePPY(this.id, ff).subscribe((res) =>{
      console.log('semakan berjaya')
    })

    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      {
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
      );
  }

  ConfirmNotSupport(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      {
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
      );
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
    this.router.navigate(['/supporting-officer/completed-application-list']);
  }
  // closeModal3() {
  //   this.modalRef3.hide();
  //   this.router.navigate(['core/agency-pdrm/application-information'])
  // }

  infos =[]

  getData(){
    this.pentadbir.editPPY(this.id).subscribe((res)=>{
      this.infos = res
    })
  }
}
