import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { ServicesService } from 'src/app/shared/services/services/service.service';
import { Router, Routes } from "@angular/router";
// document.querySelector("#file-upload").onchange = function(){
//   document.querySelector("#file-name").textContent = this.files[0].name;
// }


@Component({
  selector: 'app-archive-document-list',
  templateUrl: './archive-document-list.component.html',
  styleUrls: ['./archive-document-list.component.scss']
})
export class ArchiveDocumentListComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  filename = "Tiada Fail Dipilih";

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService,
    private router: Router,
  ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  //tambah arkib variable
  titleMs: string;
  titleEn: string;
  contentMs: string;
  contentEn: string;
  date: string;
  status: string;

  //edit arkib
  upd_titleMs: string;
  upd_titleEn: string;
  upd_contentMs: string;
  upd_contentEn: string;
  upd_date: string;
  upd_status: string;


  updateName(event) {

    var output = document.getElementById('fileList');

    output.innerHTML = '<ul>';
    for (var i = 0; i < event.target.files.length; ++i) {
      output.innerHTML += '<li>' + event.target.files[i].name + '</li>';
    }
    output.innerHTML += '</ul>';
    // alert(event.target.files[0])
    // this.filename = event.target.files[0].name;
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

  archiveList = [
    {
      title: "Manual Pengguna",
      information: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae totam. Non sint deleniti doloribus, odit libero consequatur, ab perspiciatis eius molestias porro maxime veniam eveniet, tempora expedita numquam.",
      date: "3/4/2021",
      status: "Aktif"
    },
    {
      title: "Arkib 1",
      information: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae totam. Non sint deleniti doloribus, odit libero consequatur, ab perspiciatis eius molestias porro maxime veniam eveniet, tempora expedita numquam.",
      date: "2/2/2020",
      status: "Tidak Aktif"
    },
    {
      title: "Arkib 2",
      information: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae totam. Non sint deleniti doloribus, odit libero consequatur, ab perspiciatis eius molestias porro maxime veniam eveniet, tempora expedita numquam.",
      date: "3/2/2021",
      status: "Aktif"
    },
    {
      title: "Gerak Panduan",
      information: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae totam. Non sint deleniti doloribus, odit libero consequatur, ab perspiciatis eius molestias porro maxime veniam eveniet, tempora expedita numquam.",
      date: "1/1/2021",
      status: "Aktif"
    },
    {
      title: "Lain-Lain",
      information: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae totam. Non sint deleniti doloribus, odit libero consequatur, ab perspiciatis eius molestias porro maxime veniam eveniet, tempora expedita numquam.",
      date: "21/1/2021",
      status: "Tidak Aktif"
    },
    {
      title: "Arkib 2",
      information: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae totam. Non sint deleniti doloribus, odit libero consequatur, ab perspiciatis eius molestias porro maxime veniam eveniet, tempora expedita numquam.",
      date: "3/2/2021",
      status: "Tidak Aktif"
    }

  ]

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  //end datatable


  ngOnInit(): void {
    this.fetch(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rows = data;
    });

    // this.verifyFile();
  }


  //modal
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  //open modal
  addDocument(content) {
    this.modalRef = this.modalService.show(content, { class: 'modal-lg' });
    // this.modalRef.setClass('modal-sm');
  }

  //open edit modal
  openEdit(template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    // this.modalRef.setClass('modal-sm');
  }

  addSuccess(template) {

    let ff = new FormData();
    ff.append("tajukMy",this.titleMs);
    ff.append("TajukEn",this.titleEn);
    ff.append("KandunganMs",this.contentMs);
    ff.append("KandunganEn",this.contentEn);
    ff.append("tarikh",this.date);
    ff.append("Status",this.status)

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

    let ff = new FormData();
    ff.append("tajukMy",this.upd_titleMs);
    ff.append("TajukEn",this.upd_titleEn);
    ff.append("KandunganMs",this.upd_contentMs);
    ff.append("KandunganEn",this.upd_contentEn);
    ff.append("tarikh",this.upd_date);
    ff.append("Status",this.upd_status)

    
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

  addFile(template) {
    this.modalRef = this.modalService.show(template);
  }

  confirmAddFile() {
    this.closeModal();

  }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
  }
}
