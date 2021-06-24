import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
// import { event } from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  ColumnMode = ColumnMode;

  constructor(
    private modalService: BsModalService,
  ) {
    // this.fetch(data => {
    //   this.rows = data;
    // });
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
    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      { class: 'modal-sm' }
    );
  }

  editAnnounceSuccess(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      { class: 'modal-sm' }
    );
  }

  editAnnounce(template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
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

  ngOnInit(): void {
    // this.fetch(data => {
    //   // cache our list
    //   this.temp = data;

    //   // push our inital complete list
    //   this.rows = data;
    // });
    this.temp = this.announcement

  }

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