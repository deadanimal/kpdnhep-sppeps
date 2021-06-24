import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { ServicesArkib} from 'src/app/shared/services/pentadbir/arkib';
import { ServicesService } from './../../../../shared/services/services/service.service';

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

@Component({
  selector: 'app-archive-pictorial',
  templateUrl: './archive-pictorial.component.html',
  styleUrls: ['./archive-pictorial.component.scss']
})
export class ArchivePictorialComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  //var
  userdata: any;
  token;
  fileToUpload: File = null;  
  tajuk;
  nama_fail_manual;
  cipta_oleh;


  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService,
    private arkibserv: ServicesArkib,
    private router: Router
    ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  //display File name
  updateName(files: FileList){

    // var output = document.getElementById('fileList');

    // output.innerHTML = '<ul>';
    // for (var i = 0; i < event.target.files.length; ++i) {
    //   output.innerHTML += '<li>' + event.target.files[i].name + '</li>';
    // }
    // output.innerHTML += '</ul>';
    // alert(event.target.files[0])
    // this.filename = event.target.files[0].name;

      this.fileToUpload = files.item(0);
      document.getElementById("fileList").innerHTML = files[0].name;
      this.nama_fail_manual= files[0].name;
  }

  //start data table
  //
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/archive.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }


  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        (d.title.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.status.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.date.toLowerCase().indexOf(val) !== -1 || !val)
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.myFilterTable.offset = 0;
  }

  //table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  SelectionType = SelectionType;

  archiveType = [
    {
      name: "Manual Pengguna",
      imageLink:"assets/img/theme/ali-pazani.jpg",
      icon: "fas fa-book",
      date: "3/4/2021",
      status: "Aktif"
    },
    {
      name: "Arkib 1",
      imageLink:"assets/img/theme/ali-pazani.jpg",
      icon: "fas fa-gavel",
      date: "2/2/2020",
      status: "Tidak Aktif"
    },
    {
      name: "Arkib 2",
      imageLink:"assets/img/theme/ali-pazani.jpg",
      icon: "fas fa-book",
      date: "3/2/2021",
      status: "Aktif"
    },
    {
      name: "Gerak Panduan",
      imageLink:"assets/img/theme/ali-pazani.jpg",
      icon: "fas fa-gavel",
      date: "1/1/2021",
      status: "Aktif"
    },
    {
      name: "Lain-Lain",
      imageLink:"assets/img/theme/ali-pazani.jpg",
      icon: "fas fa-book",
      date: "21/1/2021",
      status: "Tidak Aktif"
    },
    {
      name: "Arkib 2",
      imageLink:"assets/img/theme/ali-pazani.jpg",
      icon: "fas fa-gavel",
      date: "3/2/2021",
      status: "Tidak Aktif"
    }

  ]

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = +$event.target.value;
  }

  //end datatable


  ngOnInit(): void {
    // this.fetch(data => {
    //   // cache our list
    //   this.temp = data;

    //   // push our inital complete list
    //   this.rows = data;
    // });
    this.token = this.jwtService.getToken('accessToken');
    this.authService.getUserDetail().subscribe((res) => {

      this.userdata = res;
      this.cipta_oleh = res.id;
    });

  }


  //modal
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  //open modal
  addDocument(content) {
    this.modalRef = this.modalService.show(content);
    // this.modalRef.setClass('modal-sm');
  }

  //open edit modal
  openEdit(template) {
    this.modalRef = this.modalService.show(template);
    // this.modalRef.setClass('modal-sm');
  }

  addSuccess(template) {
    this.closeModal();
    this.modalRef = this.modalService.show(template,
      {
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  editSuccess(template) {
    this.closeModal();
    this.modalRef = this.modalService.show(template,
      {
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  deleteDoc(template) {
    // this.closeModal();
    this.modalRef = this.modalService.show(template,
      {
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  confirmDelete() {
    this.closeModal();

  }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
  }

  saveArchive(){
    let ff = new FormData();
    ff.append("tajuk", this.tajuk);
    ff.append("nama_fail_manual", this.fileToUpload);
    ff.append("cipta_oleh", this.cipta_oleh);

    this.arkibserv.postArkib(ff).subscribe((res) => {
      if (res.status == "success") {
        this.modalRef.hide();
        this.router.navigate(['user/application-status']);
      }
    }, () => {

    }, () => {

    });

  }

}
