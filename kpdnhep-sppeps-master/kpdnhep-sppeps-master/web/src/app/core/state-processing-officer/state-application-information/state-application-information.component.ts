import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { AuthService } from './../../../shared/auth/auth.service';
import { JwtService } from './../../../shared/handler/jwt/jwt.service';
import { ServicesService } from './../../../shared/services/services/service.service';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-state-application-information',
  templateUrl: './state-application-information.component.html',
  styleUrls: ['./state-application-information.component.scss']
})
export class StateApplicationInformationComponent implements OnInit {

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
  id: any;
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


  ngOnInit(): void {

    this.token = this.jwtService.getToken('accessToken');
    this.id = this.route.snapshot.params.id;
    this.getData();

    this.authService.getUserDetail().subscribe((res) => {

      this.userdata = res;
      this.nama = res.name;
      this.nric = res.no_kp;
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

  public show:boolean = false;
  click = true;
  //hide and show div
  toggle() {
    this.show = !this.show;
    this.click = !this.click;
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;


  action: string;

  onSubmit(template) {
    this.action = (<HTMLInputElement>document.getElementById('action')).value;

      // this.modalRef = this.modalService.show(template);
    
      if(this.action == "Permohonan Lengkap"){
        this.modalRef = this.modalService.show(template);
      }
      else if(this.action == "Permohonan Tidak Lengkap"){
        this.modalRef = this.modalService.show(template);
      }
    
  }

  ConfirmSubmit(template, template2) {
    this.closeModal();

    this.action = (<HTMLInputElement>document.getElementById('action')).value;

    let ff = new FormData();
    ff.append("tindakan", this.tindakan);
    ff.append("catatan", this.catatan)

    this.pentadbir.updatePPN(this.id, ff).subscribe((res) => {
      console.log('semakan berjaya')
    })

    if(this.action == "Permohonan Lengkap"){
      this.modalRef2 = this.modalService.show(template);
    }
    else if(this.action == "Permohonan Tidak Lengkap"){
      this.modalRef2 = this.modalService.show(template2);
    }
    
  }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
    this.router.navigate(['/state-processing-officer/state-completed-list']);
  }

  back(){
    this.router.navigate(['/state-processing-officer/state-application-list']);
  }
  info = [];
  getData(){
    this.pentadbir.editPPN(this.id).subscribe((res) => {
      this.info = res;
    })
  }

  view = false;

  display(){
    this.view = !this.view;
  }
  tindakan;
  catatan;
  submit(){
    let ff = new FormData();
    ff.append("tidakan", this.tindakan);
    ff.append("catatan", this.catatan);

    this.pentadbir.updatePPN(this.id, ff).subscribe((res) => {
      console.log('semakan berjaya')
    })
  }

}
