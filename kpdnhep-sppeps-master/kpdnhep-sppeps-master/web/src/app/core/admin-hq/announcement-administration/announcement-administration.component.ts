import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
// import { event } from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-announcement-administration',
  templateUrl: './announcement-administration.component.html',
  styleUrls: ['./announcement-administration.component.scss']
})
export class AnnouncementAdministrationComponent implements OnInit {


  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private jwtService: JwtService,
    private pentadbir: PentadbirService,
    private router: Router,
  ) {
    
  }

  ColumnMode = ColumnMode;

  token: String;
  route: Router;
  userdata: any

  //new announcement variables
  // titleMs: string;
  // titleEn: string;
  // DescriptionMy: string;
  // DescriptionEn: string;
  // status: string;
  turutan;

  //update announcement variables
  upd_titleMs: string;
  upd_titleEn: string;
  upd_DescriptionMy: string;
  upd_DescriptionEn: string;
  upd_status: string;

  tajuk_ms;
  tajuk_en;
  kandungan_en;
  kandungan_ms;
  status;
  urutan;

  ngOnInit(): void {
    this.temp = this.announcement;

  }


  //display File name
  updateName(event) {

    var output = document.getElementById('fileList');

    output.innerHTML = '<ul>';
    for (var i = 0; i < event.target.files.length; ++i) {
      output.innerHTML += '<li>' + event.target.files[i].name + '</li>';
    }
    output.innerHTML += '</ul>';
  }


  //Modal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;


  addAnnounce(template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  AddAnnounceSuccess(template) {

    let ff = new FormData();
    ff.append("tajuk_ms",this.tajuk_ms);
    ff.append("tajuk_en",this.tajuk_en)
    ff.append("kandungan_ms",this.kandungan_ms);
    ff.append("kandungan_en",this.kandungan_en)
    ff.append("turutan",this.turutan)
    ff.append("status",this.status)

    this.pentadbir.newPengumuman(ff).subscribe((res) => {
      if (res.status == "success") {
        this.closeModal();
        this.modalRef2 = this.modalService.show(template,
          { class: 'modal-sm' }
        );}
    }, () => {

    }, () => {

    }
    );
  }

  editAnnounce(template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  editAnnounceSuccess(template) {

    let ff = new FormData();
    ff.append("tajukMy",this.upd_titleMs);
    ff.append("TajukEn",this.upd_titleEn)
    ff.append("keteranganMy",this.upd_DescriptionMy);
    ff.append("KeteranganEn",this.upd_DescriptionEn)
    ff.append("Status",this.upd_status)


    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      { class: 'modal-sm' }
    );
  }


  deleteAnnounce(template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirmDelete(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      { class: 'modal-sm' }
    );
  }


  closeModal() {
    this.modalRef.hide();
  }

  closeModal2() {
    this.modalRef2.hide();
  }



  //start data table

  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter(event) {
    console.log(this.temp)
    const val = event.target.value.toLowerCase();

    console.log("Aaaaaaa", val)
    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        // (d.id.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.title.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.category.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.content.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.date.toLowerCase().indexOf(val) !== -1 || !val)
      );
    });

    // update the rows
    this.announcement = temp;
    // Whenever the filter changes, always go back to the first page
    this.myFilterTable.offset = 0;
  }

  //table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  SelectionType = SelectionType;

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = +$event.target.value;
  }

  //end datatable

  announcement = [
    {
      title: "Apakah syarat-syarat untuk menjadi Ejen Pemilikan Semula?",
      content: "Warganegara Malaysia",
      imgLink: "/assets/img/theme/ali-pazani.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
    {
      title: "Bilakah syarat ini mula dikuatkuasa?",
      content: "25 Februari 2021",
      imgLink: "/assets/img/theme/wade.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
    {
      title: "Apakah hak-hak pengguna?",
      content: "Melaporkan kepada pihak 4 berkuasa",
      imgLink: "/assets/img/theme/wade.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
    {
      title: "Bagaimana menjadi pengguna yang bijak?",
      content: "Memilih barangan yang berkualiti",
      imgLink: "/assets/img/theme/wade.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
    {
      title: "Bagaimana menjadi pengguna yang bijak?",
      content: "Memilih barangan yang berkualiti",
      imgLink: "/assets/img/theme/wade.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
    {
      title: "Apakah hak-hak pengguna?",
      content: "Melaporkan kepada pihak 4 berkuasa",
      imgLink: "/assets/img/theme/wade.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
    {
      title: "Bagaimana menjadi pengguna yang bijak?",
      content: "Memilih barangan yang berkualiti",
      imgLink: "/assets/img/theme/wade.jpg",
      date: "08/01/2021",
      status: "Aktif"
    },
  ]

}