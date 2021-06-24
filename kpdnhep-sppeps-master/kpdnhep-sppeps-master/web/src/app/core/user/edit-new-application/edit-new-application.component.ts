import { Component, OnInit } from '@angular/core';
import { W3csService } from '../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { AuthService } from '../../../shared/auth/auth.service';
import { JwtService } from '../../../shared/handler/jwt/jwt.service';
import { ServicesService } from '../../../shared/services/services/service.service';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

@Component({
  selector: 'app-edit-new-application',
  templateUrl: './edit-new-application.component.html',
  styleUrls: ['./edit-new-application.component.scss']
})


export class EditNewApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService,
    private pentadbir: PentadbirService,
    private routes: ActivatedRoute
  ) { }

  tickets = [
    { id: 1, name: "B1" },
    { id: 2, name: "B2"  },
    { id: 3, name: "D"  },
    { id: 4, name: "E"  },
    { id: 5, name: "F"  },
  ];
  checkedTickets=[]

  education = [
    { id: 1, name: "Tiada" },
    { id: 2, name: "Darjah 6"  },
    { id: 3, name: "PMR"  },
    { id: 4, name: "SPM"  },
    { id: 5, name: "Diploma"  },
    { id: 6, name: "Ijazah / Master"  },
  ];
  checkededucation=[]

  route: Router;
  userdata: any
  // CSS class
  fontSize: string;
  fontColor: string;
  token: String;

  //variable
  formCheck: boolean = true;

  //form Variables
  notelefonori: string;
  notelefonori2: string;
  emelori: string;
  poskodori: string;
  alamat1ori: string;
  alamat2ori: string;
  negeriori: string;
  pk_sek: string = "";
  tahap_pen;
  lesen;
  skop_tugas: string = "";
  pp_eps: string = "";
  agreeTick: boolean = false;
  nama_faillesen: string = "";
  bank_or_sewa;
  status_id;
  ic_panel;

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
  name;
  umur;
  no_kp;
  id;

  ngOnInit(): void {

    this.token = this.jwtService.getToken('accessToken');
    this.id = this.routes.snapshot.params.id;
    this.getData();

    this.authService.getUserDetail().subscribe((res) => {

      this.userdata = res;
      this.notelefonori = res.notelbimbit.substr(0, 3);
      this.notelefonori2 = res.notelbimbit.substr(3);
      this.emelori = res.emel;
      this.alamat1ori = res.alamat1;
      this.alamat2ori = res.alamat2;
      this.poskodori = res.poskod;
      this.negeriori = res.negeri;
      console.log('resauth', res);
      this.services.getExtraInfo("p1").subscribe((res)=>{
        if (res!=""){
            this.tahap_pen = res.pendidikan_tinggi;
            this.lesen = res.lesen_sah != "" && res.lesen_sah !== null ? res.lesen_sah : 'z';
            this.panel_bank = res.panel_bank;
            this.panel_name = res.nama_panel;
            this.no_permit = res.no_permit;
            this.no_telPanel = res.notel_panel;
            this.left_bank_num = res.notel_bank !== null ? res.notel_bank.substr(0, 3) : "";
            this.right_bank_num = res.notel_bank !== null ? res.notel_bank.substr(3) : "";
            this.icNumber1 = res.no_kp !== null ? res.no_kp.substr(0,6) : "";
            this.icNumber2 = res.no_kp !== null ? res.no_kp.substr(6,2) : "";
            this.icNumber3 = res.no_kp !== null ? res.no_kp.substr(8,4): "";
           
            if (res.gambar_lesen !== null && res.gambar_lesen != ""){
              document.getElementById("fileList").innerHTML = res.gambar_lesen;
            }

            if (this.panel_name !== null && this.panel_name != ""){
              this.formActive();
            }else{
              this.formDeactive();
            }
            this.skop_tugas = res.akta_tugas;
            this.pp_eps = res.akta_eps;
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
  }

  edit;
  getData(){
    this.pentadbir.editPermohonan(this.id).subscribe((res) => {
      // this.edit = res[0];
      // this.notelefonori = this.edit.notelbimbit.substr(0, 3);
      // this.notelefonori2 = this.edit.notelbimbit.substr(3);
      // this.emelori = this.edit.emel;
      // this.alamat1ori = this.edit.alamat1;
      // this.alamat2ori = this.edit.alamat2;
      // this.poskodori = this.edit.poskod;
      // this.negeriori = this.edit.negeri;
      // this.tahap_pen = this.edit.pendidikan_tinggi;
      // this.lesen = this.edit.lesen_sah != "" && res.lesen_sah !== null ? res.lesen_sah : 'z';
      // this.panel_bank = res.panel_bank;
      // this.panel_name = res.nama_panel;
      // this.no_permit = res.no_permit;
      // this.no_telPanel = res.notel_panel;
      // this.left_bank_num = res.notel_bank !== null ? res.notel_bank.substr(0, 3) : "";
      // this.right_bank_num = res.notel_bank !== null ? res.notel_bank.substr(3) : "";
      // this.icNumber1 = res.no_kp !== null ? res.no_kp.substr(0,6) : "";
      // this.icNumber2 = res.no_kp !== null ? res.no_kp.substr(6,2) : "";
      // this.icNumber3 = res.no_kp !== null ? res.no_kp.substr(8,4): "";
    })
  }

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

  radioCheck(evt) {
    if (!this.checkededucation.includes(evt)) {
      this.checkededucation.push(evt);
    } else {
      var index = this.checkededucation.indexOf(evt);
      if (index > -1) {
        this.checkededucation.splice(index, 1);
      }
    }
    console.log(this.checkededucation);
    this.tahap_pen = this.checkededucation;
  }

  insertLesen(l) {
    if (this.lesen !== null && this.lesen.includes(l)) {
      console.log(this.lesen.includes(l));
      this.lesen = this.lesen.replace("," + l, "");
      return this.lesen;
    } else {
      this.lesen = this.lesen + "," + l;
      return this.lesen
    }
  }

  public showPanel: boolean = false;

  formActive() {
    this.formCheck = false;
    this.showPanel = true
  }

  formDeactive() {
    this.formCheck = true;
    this.showPanel = false
  }

  updateName(event) {

    var output = document.getElementById('fileList');
    output.innerHTML = event.target.files[0].name;
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
    ff.append("no_kp", this.userdata.no_kp);
    ff.append("umur", this.userdata.umur);
    ff.append("jantina", this.userdata.jantina);
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("emel", this.emelori)
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("pekerjaan_skrg", this.pk_sek)
    ff.append("pendidikan_tinggi", this.tahap_pen)
    ff.append("lesen_sah", this.lesen)
    ff.append("bank_or_sewa", this.bank_or_sewa)
    ff.append("status_id", '1')

    if (this.formCheck === false) {
      ff.append("panel_bank", this.panel_bank)
      ff.append("notel_bank", this.left_bank_num + this.right_bank_num)
      ff.append("nama_panel", this.panel_name)
      ff.append("ic_panel", this.icNumber1 + this.icNumber2 + this.icNumber3)
      ff.append("no_permit", this.no_permit)
      ff.append("notel_panel", this.no_telPanel)
    }

    ff.append("akta_tugas", this.skop_tugas)
    ff.append("akta_eps", this.pp_eps)
    ff.append("gambar_lesen", this.fileToUpload)
    ff.append("nama_faillesen",this.nama_faillesen)

    this.pentadbir.postpermohonanA(ff).subscribe((res) => {
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
    ff.append("no_kp", this.userdata.no_kp);
    ff.append("umur", this.userdata.umur);
    ff.append("jantina", this.userdata.jantina);
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("emel", this.emelori)
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("pekerjaan_skrg", this.pk_sek)
    ff.append("pendidikan_tinggi", this.tahap_pen)
    ff.append("lesen_sah", this.lesen)
    ff.append("bank_or_sewa", this.bank_or_sewa)
    ff.append("status_id", '0')

    if (this.formCheck === false) {
      ff.append("panel_bank", this.panel_bank)
      ff.append("notel_bank", this.left_bank_num + this.right_bank_num)
      ff.append("nama_panel", this.panel_name)
      ff.append("ic_panel", this.icNumber1 + this.icNumber2 + this.icNumber3)
      ff.append("no_permit", this.no_permit)
      ff.append("notel_panel", this.no_telPanel)
    }

    ff.append("akta_tugas", this.skop_tugas)
    ff.append("akta_eps", this.pp_eps)
    ff.append("gambar_lesen", this.fileToUpload)
    ff.append("nama_faillesen",this.nama_faillesen)

    this.pentadbir.savePermohonanA(ff).subscribe((res) => {
      if (res.status == "success") {
        this.modalRef.hide();
        this.router.navigate(['user/application-status']);
      }
    console.log(this.userdata.no_kp);
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


}


