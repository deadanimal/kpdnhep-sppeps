import { Component, OnInit } from '@angular/core';
import { W3csService } from './../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";
import { AuthService } from './../../../shared/auth/auth.service';
import { JwtService } from './../../../shared/handler/jwt/jwt.service';
import { ServicesService } from './../../../shared/services/services/service.service';

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

@Component({
  selector: 'app-renewal-application',
  templateUrl: './renewal-application.component.html',
  styleUrls: ['./renewal-application.component.scss']
})


export class RenewalApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService
  ) { }

  tickets = [
    { id: 1, name: "B1" },
    { id: 2, name: "B2"  },
    { id: 3, name: "D"  },
    { id: 4, name: "E"  },
    { id: 5, name: "F"  },
  ];
  checkedTickets=[]

  route: Router;
  userdata: any
  // CSS class
  fontSize: string;
  fontColor: string;
  token: String;

  //variable
  formCheck: boolean = true;
  epsWorkStatusDate: boolean = true;
  epsWorkStatusOccu: boolean = true;
  yearAttend: boolean = true;


  //form Variables
  alasan_k: string;
  notelefonori: string;
  notelefonori2: string;
  dari_tahun: string;
  emelori: string;
  poskodori: string;
  alamat1ori: string;
  alamat2ori: string;
  negeriori: string;
  pk_sek: string = "";
  tahap_pen: string = "";
  lesen;
  skop_tugas: string = "";
  sp_eps: string = "";
  agreeTick: boolean = false;
  p_sampingan : string = "";
  tahun_h: string = "";
  nama_faillesen : string = "";
  nama_failsokong: string = "";

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
  bank_or_sewa;
  nopermit_panel;
  status_pekerjaan


  ngOnInit(): void {

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

      this.services.getExtraInfo("p2").subscribe((res)=>{
        if (res!=""){
            this.pk_sek = res.pk_sek;
            this.tahap_pen = res.tahap_pen;
            this.lesen = res.lesen;

            this.panel_bank = res.panel_bank;
            this.panel_name = res.nama_panel;
            this.no_permit = res.no_permit;
            this.no_telPanel = res.notel2;
            this.left_bank_num = res.notel.substr(0, 3);
            this.right_bank_num = res.notel.substr(3);
            this.icNumber1 = res.no_kp.substr(0,6);
            this.icNumber2 = res.no_kp.substr(6,2);
            this.icNumber3 = res.no_kp.substr(8,4);

            if (this.panel_name !== null && this.panel_name != ""){
              this.formActive();
            }else{
              this.formDeactive();
            }

            if (res.nama_faillesen !== null && res.nama_faillesen != ""){
              document.getElementById("fileList").innerHTML = res.nama_faillesen;
            }

            if (res.nama_failsokong !== null && res.nama_failsokong != ""){
              document.getElementById("fileList2").innerHTML = res.nama_failsokong;
            }

            this.skop_tugas = res.skop_tugas;
            if (res.sp_eps == 1){
              this.epsActiveDate();
              let elem = document.getElementById("fullTime") as HTMLInputElement;
              elem.checked = true;
              this.dari_tahun = res.dari_tahun;
            }
            else{
              this.epsActiveOccu();
              let elem = document.getElementById("partTime") as HTMLInputElement;
              elem.checked = true;
              this.p_sampingan = res.p_sampingan;
            }

            if (res.tahun_h != 0 && res.tahun_h != null && res.tahun_h != ""){
              this.tahun_h = res.tahun_h;
              this.yearAttend = false;
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

    });

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );

    this.yearDropdown();
  }
  
  // insertLesen(l) {
  //   if (this.lesen !== null && this.lesen.includes(l)) {
  //     this.lesen = this.lesen.replace("," + l, "");
  //   } else {
  //     this.lesen = this.lesen + "," + l;
  //   }
  // }

  onCheck(evt) {
    if (!this.checkedTickets.includes(evt)) {
      this.checkedTickets.push(evt);
    } else {
      var index = this.checkedTickets.indexOf(evt);
      if (index > -1) {
        this.checkedTickets.splice(index, 1);
      }
    }
    console.log(this.checkedTickets);
    this.lesen = this.checkedTickets;
  }

  public showPanel: boolean = false;

  formActive() {
    this.formCheck = false;
    this.showPanel = true
    console.log(this.yearAttend);
    
  }

  formDeactive() {
    this.formCheck = true;
    this.showPanel = false
  }

  updateName(event) {

    var output = document.getElementById('fileList');
    output.innerHTML = event.target.files[0].name;
  }

    //active eps work status Date
    epsActiveDate() {
      this.sp_eps = '1';
      this.epsWorkStatusDate = false;
      this.epsWorkStatusOccu = true;
    }
    epsActiveOccu() {
      this.sp_eps = '2';
      this.epsWorkStatusOccu = false;
      this.epsWorkStatusDate = true;
    }
  
    yearAttendActive() {
      this.yearAttend = false;
    }
  
    yearAttendDeactive() {
      this.yearAttend = true;
    }

    public years: number[] = [];
  yearDropdown() {
    let currentYear: number = new Date().getFullYear();
    for (let i = (currentYear - 30); i <= (currentYear); i++) {
      this.years.push(i);
    }
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
    ff.append("nama", this.userdata.nama);
    ff.append("no_permit", this.userdata.no_permit);
    ff.append("umur", this.userdata.umur);
    ff.append("jantina", this.userdata.jantina);
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("emel", this.emelori)
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("pekerjaan_sampingan", this.p_sampingan)
    ff.append("pendidikan_tinggi", this.tahap_pen)
    ff.append("lesen_sah", this.lesen);
    ff.append("bank_or_sewa", this.bank_or_sewa);
    ff.append("status_id", '1');

    if (this.formCheck === false) {
      ff.append("panel_bank", this.panel_bank)
      ff.append("notel_bank", this.left_bank_num + this.right_bank_num)
      ff.append("nama_panel", this.panel_name)
      ff.append("no_kp", this.icNumber1 + this.icNumber2 + this.icNumber3)
      ff.append("nopermit_panel", this.nopermit_panel)
      ff.append("notel_panel", this.no_telPanel)
    }

    ff.append("status_pekerjaan", this.status_pekerjaan)
    ff.append("kursus_", this.sp_eps)
    if (this.sp_eps == '1'){
      ff.append("dari_tahun",this.dari_tahun);
    }else if (this.sp_eps == '2'){
      ff.append('pekerjaan_sampingan',this.p_sampingan);
    }
    ff.append("gambar_lesen", this.fileToUpload);
    ff.append("surat_sokongan", this.fileToUpload2);
    ff.append("nama_faillesen", this.nama_faillesen);
    ff.append("nama_failsokong", this.nama_failsokong);

    if (this.yearAttend === false){
      ff.append("tahun_h",this.tahun_h);
    }else{
      ff.append("tahun_h",'0');
    }

    this.services.saveApplicationR(ff).subscribe((res) => {
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
    ff.append("nama", this.userdata.nama);
    ff.append("no_permit", this.userdata.no_permit);
    ff.append("umur", this.userdata.umur);
    ff.append("jantina", this.userdata.jantina);
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("emel", this.emelori)
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("pekerjaan_sampingan", this.pk_sek)
    ff.append("pendidikan_tinggi", this.tahap_pen)
    ff.append("lesen_sah", this.lesen);
    ff.append("bank_or_sewa", this.bank_or_sewa);
    ff.append("status_id", '0');

    if (this.formCheck === false) {
      ff.append("panel_bank", this.panel_bank)
      ff.append("notel_bank", this.left_bank_num + this.right_bank_num)
      ff.append("nama_panel", this.panel_name)
      ff.append("no_kp", this.icNumber1 + this.icNumber2 + this.icNumber3)
      ff.append("nopermit_panel", this.nopermit_panel)
      ff.append("notel_panel", this.no_telPanel)
    }

    ff.append("skop_tugas", this.skop_tugas)
    ff.append("kursus_", this.sp_eps)
    if (this.sp_eps == '1'){
      ff.append("dari_tahun",this.dari_tahun);
    }else if (this.sp_eps == '2'){
      ff.append('p_sampingan',this.p_sampingan);
    }
    ff.append("gambar_lesen", this.fileToUpload)
    ff.append("surat_sokongan", this.fileToUpload2);
    ff.append("nama_faillesen", this.nama_faillesen);
    ff.append("nama_failsokong", this.nama_failsokong);

    if (this.yearAttend === false){
      ff.append("tahun_h",this.tahun_h);
    }else{
      ff.append("tahun_h",'0');
    }

    this.services.saveApplicationR(ff).subscribe((res) => {
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

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    document.getElementById("fileList").innerHTML = files[0].name;
    this.nama_faillesen = files[0].name;
  }

  handleFileInput2(files: FileList) {
    this.fileToUpload2 = files.item(0);
    document.getElementById("fileList2").innerHTML = files[0].name;
    this.nama_failsokong = files[0].name;
  }

  //navigate page
  // navigate(){
  //   this.router.navigate(['core/user/user-portal'])
  // }
}


