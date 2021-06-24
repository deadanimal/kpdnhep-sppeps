import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.scss']
})
export class UserLogsComponent implements OnInit {

  editing = {};
  rows = [];
  
  ColumnMode = ColumnMode;

  public name: "Yuzrita binti Md. Yusoff"

  constructor(
    private modalService: BsModalService,
  ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  public showSearch:boolean = true;
  public showUserLogList:boolean = false;
  public showUserLog:boolean = false;


  //hide and show div

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }

  toggleShowUserLogList(){
    this.showUserLogList = !this.showUserLogList;
  }

  toggleShowUserLog(){

    this.toggleSearch()
    this.toggleShowUserLogList()
    this.showUserLog = !this.showUserLog;
  }



  public filterLog: any;
  onSubmit(){
    this.filterLog = (<HTMLInputElement>document.getElementById('log')).value;
    console.log("log", this.filterLog)

    // this.toggleSearch();
    this.toggleShowUserLogList();

  
  }

  //Modal
  modalRef: BsModalRef;

  saveUpdate(template) {
    this.modalRef = this.modalService.show(template
      // { class: 'modal-xl' }
    );
  }

  closeModal() {
    this.modalRef.hide();
  }


  //start data table
  //
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/audit-trails.json`);

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
        (d.id.toLowerCase().indexOf(val) !== -1 || !val)
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
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
     this.tableEntries = $event.target.value;
   }

   userLogs = [
     {
       date: "15/01/2021 10:23",
       action: "Hapus",
       description: "Semakan Permohonan Dari Permohonan Telah Disokong ke Permohonan Diluluskan SANUSI BIN ZAINOL ABIDIN 780314087437",
     },
     {
      date: "15/01/2021 10:23",
      action: "Cipta",
      description: "Semakan Permohonan Dari Permohonan Telah Disokong ke Permohonan Diluluskan ALI BIN ABDULLAH 780314087437",
    },
    {
      date: "15/01/2021 10:23",
      action: "Kemaskini",
      description: "Semakan Permohonan Dari Permohonan Tidak Disokong ke Permohonan Diluluskan LEE HUI CHEE 780314087437",
    },
    {
      date: "24/01/2021 14:26",
      action: "Hapus",
      description: "Semakan Permohonan Dari Permohonan Telah Disokong ke Permohonan Digagalkan FADILAH BINTI MUSA 780314087437",
    },
    {
      date: "24/01/2021 14:26",
      action: "Hapus",
      description: "Semakan Permohonan Dari Permohonan Telah Disokong ke Permohonan Digagalkan FADILAH BINTI MUSA 780314087437",
    },
    {
      date: "30/01/2021 12:20",
      action: "Kemaskini",
      description: "Semakan Permohonan Dari Permohonan Tidak Disokong ke Permohonan Diluluskan LEE HUI CHEE 780314087437",
    }
   ]

   //end datatable


  ngOnInit(): void {
    this.fetch(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rows = data;
    });

  }

}