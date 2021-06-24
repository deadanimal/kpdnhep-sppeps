
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { ServicesService } from 'src/app/shared/services/services/service.service';
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-archive-document',
  templateUrl: './archive-document.component.html',
  styleUrls: ['./archive-document.component.scss']
})
export class ArchiveDocumentComponent implements OnInit {

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

  token: String;
  route: Router;
  // userdata: any;

  //Add archive type variable
  nameMs: string;
  nameEn: string;
  icon: string;
  status: string;

  //update archive type variable
  upd_nameMs: string;
  upd_nameEn: string;
  upd_icon: string;
  upd_status: string;

  ngOnInit(): void {
    this.fetch(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rows = data;
    });
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
  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  SelectionType = SelectionType;

  archiveType = [
    {
      name: "Manual Pengguna",
      icon: "fas fa-book",
      date: "3/4/2021",
      status: "Aktif"
    },
    {
      name: "Arkib 1",
      icon: "fas fa-gavel",
      date: "2/2/2020",
      status: "Tidak Aktif"
    },
    {
      name: "Arkib 2",
      icon: "fas fa-book",
      date: "3/2/2021",
      status: "Aktif"
    },
    {
      name: "Gerak Panduan",
      icon: "fas fa-gavel",
      date: "1/1/2021",
      status: "Aktif"
    },
    {
      name: "Lain-Lain",
      icon: "fas fa-book",
      date: "21/1/2021",
      status: "Tidak Aktif"
    },
    {
      name: "Arkib 2",
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

    let ff = new FormData();
    ff.append("tajukMy",this.nameMs);
    ff.append("TajukEn",this.nameEn)
    ff.append("keteranganMy",this.icon);
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
    ff.append("tajukMy",this.upd_nameMs);
    ff.append("TajukEn",this.upd_nameEn)
    ff.append("keteranganMy",this.upd_icon);
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

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
  }

}
