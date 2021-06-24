import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-audit-trails',
  templateUrl: './audit-trails.component.html',
  styleUrls: ['./audit-trails.component.scss']
})
export class AuditTrailsComponent implements OnInit {

  editing = {};
  rows = [];
  rowsLogin = [];
  rowsLogout = [];
  ColumnMode = ColumnMode;

  constructor(
    private modalService: BsModalService,
  ) {
    this.fetch(data => {
      this.rows = data;
    });

    this.fetchLogin(data => {
      this.rowsLogin = data;
    });

    this.fetchLogout(data => {
      this.rowsLogout = data;
    });
  }

  public showSearch:boolean = true;
  public showGraph:boolean = false;
  public showAll:boolean = false;
  public showLogin:boolean = false;
  public showLogout:boolean = false;
  //hide and show div

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }

  toggleGraph(){
    this.showGraph = !this.showGraph;
  }

  toggleAllList() {
    this.showAll = !this.showAll;
    console.log("aaaa")
  }

  toggleLoginList() {
    this.showLogin = !this.showLogin;
    console.log("aaaa")
  }

  toggleLogoutList() {
    this.showLogout = !this.showLogout;
    console.log("aaaa")
  }

  public filterLog: any;
  onSubmit(){
    this.filterLog = (<HTMLInputElement>document.getElementById('log')).value;
    console.log("log", this.filterLog)

    this.toggleSearch();

    if( this.filterLog == "Semua Log"){
      this.toggleGraph();
      this.toggleAllList();
    }
    else if ( this.filterLog == "Log Masuk"){
      this.toggleGraph();
      this.toggleLoginList();
    }
    else if ( this.filterLog == "Log Keluar"){
      this.toggleGraph();
      this.toggleLogoutList();
    } 
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

  fetchLogin(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/audit-trails-login.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

  fetchLogout(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/audit-trails-logout.json`);

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

   //end datatable


  ngOnInit(): void {
    this.fetch(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rows = data;
    });

    this.fetchLogin(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rowsLogin = data;
    });

    this.fetchLogout(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rowsLogout = data;
    });

  }

}