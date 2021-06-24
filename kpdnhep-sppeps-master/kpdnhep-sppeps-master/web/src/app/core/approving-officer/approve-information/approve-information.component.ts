import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { AuthService } from './../../../shared/auth/auth.service';
import { JwtService } from './../../../shared/handler/jwt/jwt.service';
import { ServicesService } from './../../../shared/services/services/service.service';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';


@Component({
  selector: 'app-approve-information',
  templateUrl: './approve-information.component.html',
  styleUrls: ['./approve-information.component.scss']
})
export class ApproveInformationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService,
    private pentadbir: PentadbirService,
    private route: ActivatedRoute
  ) { }

  token: String;
  userdata: any

  //form variables
  nama: string;
  nric: string;
  umur: string;
  jantina: string;
  alamat1: string;
  alamat2: string;
  email: string;
  negeri: string;
  notelefon: string;
  pekerjaanSekarang:string;
  lesen: string;
  pendidikan:string;

  //panel
  kerjaPanelBank: string;
  namaPanelBank: string;
  NoTelBank: string;
  namaPanel: string;
  nric_panel: string;
  noPermit: string;
  skopTugasEps: string;
  pp_eps: string;

  //semakan pegawai
  tindakan: string
  catatan: string
    id;


  ngOnInit(): void {

    this.token = this.jwtService.getToken('accessToken');
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.authService.getUserDetail().subscribe((res) => {

      this.userdata = res;
      this.nama = res.name;
      this.nric = res.nric;
      this.alamat1 = res.alamat1;
      this.alamat2 = res.alamat2;
      this.email = res.email;
      this.negeri = res.negeri;
      this.notelefon = res.notelefon;
      this.pekerjaanSekarang = res.pekerjaanSekarang;
      this.lesen = res.lesen;
      this.pendidikan = res.pendidikan;

      this.kerjaPanelBank = res.kerjaPanelBank;
      this.namaPanelBank = res.namaPanelBank;
      this.NoTelBank = this.NoTelBank;
      this.namaPanel = res.namaPanel;
      this.nric_panel = res.nric_panel;
      this.noPermit = res.noPermit;
      this.skopTugasEps = res.skopTugasEps;
      this.pendidikan = res.pendidikan;
      this.pp_eps = res.pp_eps;

      var age = parseInt(this.userdata.no_kp.substring(0, 2));

      let currYr = new Date().getFullYear().toString().substr(-2);
      this.userdata.umur = parseInt(currYr) - age;

      if (this.userdata.umur < 0) {
        let j = (2000 + this.userdata.umur) - 1900;
        this.userdata.umur = j;
      }

    });
  }

  infos = [];
  getData(){
    this.pentadbir.editPPL(this.id).subscribe((res) => {
      this.infos = res;
    })
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
    this.modalRef2 = this.modalService.show(template,);
  }

  ConfirmNotApprove(template) {
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
    this.router.navigate(['/approving-officer/approved-list']);
  }
  // closeModal3() {
  //   this.modalRef3.hide();
  //   this.router.navigate(['core/agency-pdrm/application-information'])
  // }
}
