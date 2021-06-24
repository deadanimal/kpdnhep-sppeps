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
  selector: 'app-edit-appeal-application',
  templateUrl: './edit-appeal-application.component.html',
  styleUrls: ['./edit-appeal-application.component.scss']
})
export class EditAppealApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService
  ) { }

  
  userdata: any;
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
  pp_eps: string = "";
  
  
  sebab_ditolak;
  lain_alasan;
  no_penggantian;
  alasan_rayuan;
  surat_tapisan_PDRM;
  surat_sokongan_kewangan;
  sokongan_lain1;
  sokongan_lain2;
  sokongan_lain3;

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
  fileToUpload3: File = null;
  fileToUpload4: File = null;
  fileToUpload5: File = null;
  fileToUpload6: File = null;

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

      this.services.getExtraInfo("p4").subscribe((res)=>{
        if (res!=""){
            this.sebab_ditolak = res.sebab_ditolak;
            this. lain_alasan = res.lain_alasan;
            this.no_penggantian = res.no_penggantian;
            this.alasan_rayuan = res.alasan_rayuan;
            this.surat_tapisan_PDRM = res.surat_tapisan_PDRM;
            this.surat_sokongan_kewangan = res.surat_sokongan_kewangan;
            this.sokongan_lain1 = res.sokongan_lain1;
            this.sokongan_lain2 = res.sokongan_lain2;
            this.sokongan_lain3 = res.sokongan_lain3;
          
            if (res.nama_faillesen !== null && res.nama_faillesen != ""){
              document.getElementById("fileList").innerHTML = res.nama_faillesen;
            }

            if (this.panel_name !== null && this.panel_name != ""){
              this.formActive();
            }else{
              this.formDeactive();
            }
            
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

  formDeactive() {
    this.formCheck = true;
  }

  otherReasonActive() {
    this.otherReason = false;
    console.log("typing...")
  }
  otherReasonDeactive() {
    this.otherReason = true;
  }

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  OpenAppealForm(template) {
    this.modalRef = this.modalService.show(template,
      { class: 'modal-xl' }
    );
  }

  onSave(template) {
    // this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  ConfirmSave(template) {
    this.closeModal2();
    this.modalRef3 = this.modalService.show(template,
      {
        // class: 'modal-dialog-centered',
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  onSubmit(template) {
    // this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  confirm(template) {
    this.closeModal2();
    // this.closeModal2();
    this.modalRef3 = this.modalService.show(template,
      {
        // class: 'modal-dialog-centered',
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
  }
  closeModal3() {
    // this.closeModal2();
    this.modalRef3.hide();
    this.router.navigate(['/user/application-status'])
  }

  //display filename
  updateName(event) {

    var output = document.getElementById('fileList');
    output.innerHTML = event.target.files[0].name;
  }
  updateName2(event) {

    var output = document.getElementById('fileList2');
    output.innerHTML = event.target.files[0].name;
  }

  updateName3(event) {

    var output = document.getElementById('fileList3');
    output.innerHTML = event.target.files[0].name;
  }
  updateName4(event) {

    var output = document.getElementById('fileList4');
    output.innerHTML = event.target.files[0].name;
  }
  updateName5(event) {

    var output = document.getElementById('fileList5');
    output.innerHTML = event.target.files[0].name;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    document.getElementById("fileList").innerHTML = files[0].name;
    this.surat_tapisan_PDRM = files[0].name;
  }

  handleFileInput2(files: FileList) {
    this.fileToUpload2 = files.item(0);
    document.getElementById("fileList2").innerHTML = files[0].name;
    this.surat_sokongan_kewangan = files[0].name;
  }

  handleFileInput3(files: FileList) {
    this.fileToUpload3 = files.item(0);
    document.getElementById("fileList3").innerHTML = files[0].name;
    this.sokongan_lain1 = files[0].name;
  }

  handleFileInput4(files: FileList) {
    this.fileToUpload4 = files.item(0);
    document.getElementById("fileList4").innerHTML = files[0].name;
    this.sokongan_lain2= files[0].name;
  }

  handleFileInput5(files: FileList) {
    this.fileToUpload5 = files.item(0);
    document.getElementById("fileList5").innerHTML = files[0].name;
    this.sokongan_lain3= files[0].name;
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
    ff.append("sebab_ditolak", this.sebab_ditolak)
    ff.append("lain_alasan", this.lain_alasan)
    ff.append("no_penggantian", this.no_gantian)
    ff.append("alasan_rayuan", this.alasan_rayuan)
    ff.append("surat_tapisan_PDRM", this.fileToUpload )
    ff.append("surat_sokongan_kewangan", this.fileToUpload2)
    ff.append("sokongan_lain1", this.fileToUpload3);
    ff.append("sokongan_lain2", this.fileToUpload4);
    ff.append("sokongan_lain3", this.fileToUpload5);
    ff.append("status_id", '0');

    this.services.saveApplicationA(ff).subscribe((res) => {
      if (res.status == "success") {
        this.modalRef.hide();
        this.router.navigate(['user/application-status']);
      }
    }, () => {

    }, () => {

    }
    );
  }

  hantar(template) {
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
    ff.append("sebab_ditolak", this.sebab_ditolak)
    ff.append("lain_alasan", this.lain_alasan)
    ff.append("no_penggantian", this.no_gantian)
    ff.append("alasan_rayuan", this.alasan_rayuan)
    ff.append("surat_tapisan_PDRM", this.fileToUpload)
    ff.append("surat_sokongan_kewangan", this.fileToUpload2)
    ff.append("sokongan_lain1", this.fileToUpload3);
    ff.append("sokongan_lain2", this.fileToUpload4);
    ff.append("sokongan_lain3", this.fileToUpload5);
    ff.append("status_id", '1');

    this.services.saveApplicationA(ff).subscribe((res) => {
      if (res.status == "success") {
        this.modalRef.hide();
        this.router.navigate(['user/application-status']);
      }
    }, () => {

    }, () => {

    }
    );
  }

}
