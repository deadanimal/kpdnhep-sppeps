import { Component, OnInit } from '@angular/core';
import { W3csService } from '../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";
import { AuthService } from '../../../shared/auth/auth.service';
import { JwtService } from '../../../shared/handler/jwt/jwt.service';
import { ServicesService } from '../../../shared/services/services/service.service';

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

@Component({
  selector: 'app-edit-duplicate-application',
  templateUrl: './edit-duplicate-application.component.html',
  styleUrls: ['./edit-duplicate-application.component.scss']
})
export class EditDuplicateApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService
  ) { }

  route: Router;
  userdata: any
  // CSS class
  fontSize: string;
  fontColor: string;
  token: String;

  //variable
  formCheck: boolean = true;
  otherReason: boolean = true;

//form Variables
alasan_k: string = "";
alasan_l: string = "";
no_gantian: string = "";
notelefonori: string;
notelefonori2: string;
dari_tahun: string;
emelori: string;
poskodori: string;
alamat1ori: string;
alamat2ori: string;
negeriori: string;
negeri_laporan: string = "";
pk_sek: string = "";
tahap_pen: string = "";
lesen: string = "";
skop_tugas: string = "";
sp_eps: string = "";
agreeTick: boolean = false;
p_sampingan : string = "";
tahun_h: string = "";
nama_faillesen : string = "";
nama_failsokong: string = "";
no_lpr_polis: string = "";
alasan_kehilangan;
lain_kehilangan;
no_penggantian;
salinan_laporan;
no_laporan;

//panel
panel_bank: string = "";
left_bank_num: string = "";
right_bank_num: string = "";
panel_name: string = "";
icNumber1: string = "";
icNumber2: string = "";
icNumber3: string = "";
no_permit: string = "";
no_telPanel: string = "";
fileToUpload: File = null;
fileToUpload2: File = null;

  ngOnInit(): void {

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );

    this.token = this.jwtService.getToken('accessToken');
    this.authService.getUserDetail().subscribe((res) => {

      this.userdata = res;
      this.notelefonori = res.notelbimbit.substr(0, 3);
      this.notelefonori2 = res.notelbimbit.substr(3);
      this.emelori = res.emel;
      this.alamat1ori = res.alamat1;
      this.alamat2ori = res.alamat2;
      this.poskodori = res.poskod;
      this.negeriori = res.negeri;

      this.services.getExtraInfo("p3").subscribe((res)=>{
        if (res!=""){
            this.alasan_kehilangan = res.alasan_kehilangan;
            this.lain_kehilangan = res.lain_kehilangan;
            this.no_gantian = res.no_penggantian;
            this.negeri_laporan = res.negeri_laporan;
            this.no_lpr_polis = res.no_laporan;
            document.getElementById("fileList").innerHTML = res.salinan_laporan;            
        }
      })
      var age = parseInt(this.userdata.no_kp.substring(0, 2));

      let currYr = new Date().getFullYear().toString().substr(-2);
      this.userdata.umur = parseInt(currYr) - age;

      if (this.userdata.umur < 0) {
        let j = (2000 + this.userdata.umur) - 1900;
        this.userdata.umur = j;
      }
  })
}

  formActive() {
    this.formCheck = false;
  }

  insertGantian(l) {
    if (this.no_gantian !== null && this.no_gantian.includes(l)) {
      this.no_gantian = this.no_gantian.replace("," + l, "");
    } else {
      this.no_gantian = this.no_gantian + "," + l;
    }
  }


  formDeactive() {
    this.formCheck = true;
  }

  otherReasonActive(){
    this.otherReason = false;
  }
  otherReasonDeactive(){
    this.otherReason = true;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    document.getElementById("fileList").innerHTML = files[0].name;
    this.nama_faillesen = files[0].name;
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;

  onSave(template) {
    this.modalRef = this.modalService.show(template);
  }

  ConfirmSave(template) {
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

  onSubmit(template) {
    this.modalRef = this.modalService.show(template);
  }

  toggleAg() {
    this.agreeTick ? this.agreeTick = false : this.agreeTick = true;
  }

  ConfirmSubmit(template) {
    
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

  ConfirmSubmit2(template) {

    let ff = new FormData();
    ff.append("mode","hantar");
    ff.append("no_kp", this.userdata.no_kp);
    ff.append("no_permit", this.no_permit);
    ff.append("umur", this.userdata.umur);
    ff.append("jantina", this.userdata.jantina);
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("emel", this.emelori)
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("alasan_kehilangan", this.alasan_kehilangan)
    ff.append("lain_kehilangan", this.lain_kehilangan)
    ff.append("no_penggantian",this.no_penggantian)
    ff.append('negeri_laporan',this.negeri_laporan)
    ff.append("no_laporan",this.no_laporan)
    ff.append("salinan_laporan",this.fileToUpload)
    ff.append("nama_faillprpolis", this.nama_faillesen);
    ff.append("status_id", '1')

    this.services.saveApplicationD(ff).subscribe((res) => {
      if (res.status == "success") {
        this.modalRef.hide();
        this.router.navigate(['user/application-status']);
      }
    }, () => {

    }, () => {

    }
    );
  }

  simpan(template) {
 
    let ff = new FormData();
    ff.append("mode","simpan");
    ff.append("no_kp", this.userdata.no_kp);
    ff.append("no_permit", this.no_permit);
    ff.append("umur", this.userdata.umur);
    ff.append("jantina", this.userdata.jantina);
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("emel", this.emelori)
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("alasan_kehilangan", this.alasan_kehilangan)
    ff.append("lain_kehilangan", this.lain_kehilangan)
    ff.append("no_penggantian",this.no_penggantian)
    ff.append('negeri_laporan',this.negeri_laporan)
    ff.append("no_laporan",this.no_laporan)
    ff.append("salinan_laporan",this.fileToUpload)
    ff.append("nama_faillprpolis", this.nama_faillesen);
    ff.append("status_id", '0')

    this.services.saveApplicationD(ff).subscribe((res) => {
      if (res.status == "success") {
        this.modalRef.hide();
        this.router.navigate(['user/application-status']);
      }
    }, () => {

    }, () => {

    }
    );
  }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }

  closeModal2() {
    this.modalRef2.hide();
    this.router.navigate(['user/application-status'])
  }
}
