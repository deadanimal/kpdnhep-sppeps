
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-archive-pictorial-list',
  templateUrl: './archive-pictorial-list.component.html',
  styleUrls: ['./archive-pictorial-list.component.scss']
})
export class ArchivePictorialListComponent implements OnInit {

  @ViewChild('myTable') table: any;
  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor(private modalService: BsModalService) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  //display File name
  updateName(event){

    var output = document.getElementById('fileList');

    output.innerHTML = '<ul>';
    for (var i = 0; i < event.target.files.length; ++i) {
      output.innerHTML += '<li>' + event.target.files[i].name + '</li>';
    }
    output.innerHTML += '</ul>';
    // alert(event.target.files[0])
    // this.filename = event.target.files[0].name;
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
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
    this.archiveList = temp;
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
      information: "",
      date: "3/4/2021",
      status: "Aktif",
      address: [ 
        ("/assets/img/theme/ali-pazani.jpg"), 
        ("/assets/img/theme/ali-pazani.jpg")
      ]
    },
    {
      title: "Arkib 1",
      information: "",
      date: "2/2/2020",
      status: "Tidak Aktif",
      address: [ 
        ("/assets/img/theme/ali-pazani.jpg"), 
        ("/assets/img/theme/ali-pazani.jpg"),
        ("/assets/img/theme/ali-pazani.jpg")
      ]
    },
    {
      title: "Arkib 2",
      information: "",
      date: "3/2/2021",
      status: "Aktif",
      address: [ 
        ("/assets/img/theme/ali-pazani.jpg"), 
        ("/assets/img/theme/ali-pazani.jpg"),
        ("/assets/img/theme/ali-pazani.jpg"),
        ("/assets/img/theme/ali-pazani.jpg")
      ]
    },
    {
      title: "Gerak Panduan",
      information: "",
      date: "1/1/2021",
      status: "Aktif",
      address: [ 
        ("/assets/img/theme/ali-pazani.jpg"), 
        ("/assets/img/theme/ali-pazani.jpg")
      ]
    },
    {
      title: "Lain-Lain",
      information: "",
      date: "21/1/2021",
      status: "Tidak Aktif",
      address: [ 
        ("/assets/img/theme/ali-pazani.jpg"), 
        ("/assets/img/theme/ali-pazani.jpg")
      ]
    },
    {
      title: "Arkib 2",
      information: "",
      date: "3/2/2021",
      status: "Tidak Aktif",
      address: [ 
        ("/assets/img/theme/ali-pazani.jpg"), 
        ("/assets/img/theme/ali-pazani.jpg")
      ]
    }

  ]

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = +$event.target.value;
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
  
  //end datatable


  ngOnInit(): void {
    this.fetch(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rows = data;
    });
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

  addFile(template){
    this.modalRef = this.modalService.show(template);
  }

  //close modal
  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
  }

}
