import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { AuthService } from './../../../shared/auth/auth.service';
import { JwtService } from './../../../shared/handler/jwt/jwt.service';
import { ServicesService } from './../../../shared/services/services/service.service';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-application-information',
  templateUrl: './application-information.component.html',
  styleUrls: ['./application-information.component.scss']
})
export class ApplicationInformationComponent implements OnInit {

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
  userdata: any;
  id;

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
  lesen: string;

  //form semakan pdrm
  tindakan: string;
  catatan: string;


  public show:boolean = false;
  public buttonName:any = 'Show';
  //hide and show div

  toggle() {
    this.show = !this.show;

    console.log("aaaa")

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  //variable
  formCheck: boolean = true;
  otherReason: boolean = true;

  ngOnInit(): void {

    this.token = this.jwtService.getToken('accessToken');
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.authService.getUserDetail().subscribe((res) =>{
        
      this.userdata = res;
      this.nama = res.name.substr(0,3);
      this.nric = res.nric;
      this.umur = res.umur;
      this.jantina = res.jantina;
      this.email = res.emel;
      this.alamat1 = res.alamat1;
      this.alamat2 = res.alamat2;
      this.negeri = res.negeri;
      this.notelefon = res.notelefon;  
      this.lesen = res.lesen;    

      var age = parseInt(this.userdata.no_kp.substring(0, 2));
      
      let currYr = new Date().getFullYear().toString().substr(-2);
      this.userdata.umur = parseInt(currYr)-age;

      // if (this.userdata.umur < 0){
      //   let j = (2000 + this.userdata.umur) - 1900;
      //   this.userdata.umur = j;
      // }
           
    });
  }

  formActive() {
    this.formCheck = false;
  }

  formDeactive() {
    this.formCheck = true;
  }

  otherReasonActive() {
    this.otherReason = false;
    // console.log("aaaaaaaaaaaaaaaaaaaaaa")
  }
  otherReasonDeactive() {
    this.otherReason = true;
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  action: any;

  onSubmit(template,template2) {
    this.action = (<HTMLInputElement>document.getElementById('action')).value;

    console.log("aaaaaaa",this.action)

    if(this.action == "Tiada Rekod Jenayah"){
      this.modalRef = this.modalService.show(template);
    }
    else if (this.action == "Ada Rekod Jenayah"){
      this.modalRef = this.modalService.show(template2);
    }
    else if (this.action == "Dalam Proses"){
      this.router.navigate(['/agency-pdrm/application-list']);
    }
    
  }

  NoRecord(template) {
    this.modalRef = this.modalService.show(template
      // { class: 'modal-xl' }
    );
  }

  ConfirmNoRecord(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template
    );
  }

  HaveRecord(template) {
    this.modalRef = this.modalService.show(template
    );
  }

  ConfirmSubmit(template) {

    let ff = new FormData();
    ff.append("tindakan", this.tindakan);
    ff.append("catatan", this.catatan)

    this.pentadbir.updatePDRM(this.id, ff).subscribe((res) => {
      if (res.status == "success") {
        this.router.navigate(['agency-pdrm/checked-application-list']);
      }
    }, () => {

    }, () => {

    }
    );


    this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
    this.router.navigate(['/agency-pdrm/checked-application-list']);
  }

  infos = [];
  getData(){
    this.pentadbir.editPDRM(this.id).subscribe((res) => {
      this.infos = res;
    })
  }

}
