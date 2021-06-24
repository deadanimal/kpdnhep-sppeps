import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-officer-role',
  templateUrl: './officer-role.component.html',
  styleUrls: ['./officer-role.component.scss']
})
export class OfficerRoleComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  constructor(
    private modalService: BsModalService,
  ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  // public showList:boolean = true;
  // public showUpdate:boolean = false;

  public showSearchOfficerRole: boolean= true;
  public showSearchOfficer: boolean= false;

  public showOfficerRoleList: boolean = true;
  public showOfficerList: boolean = false;
  public showInfo:boolean = false;
  public showUpdateRole: boolean =false;
  public showUpdateRole1: boolean =false;
  //hide and show div

  toggleOfficerlist() {
    this.showOfficerList = true
    this.showOfficerRoleList = false

    this.showSearchOfficer = true
    this.showSearchOfficerRole = false

    // console.log("aaaa")

  }

  toggleOfficerInfo() {
    this.showOfficerList = false
    this.showSearchOfficer = false
    this.showInfo = !this.showInfo;

    console.log("bbbb")

  }

  toggleUpdateRole() {

    const state = (<HTMLInputElement>document.getElementById('state')).value;

    if (state == "W. P. Putrajaya"){
      this.showUpdateRole1 = true
    }
    else{
      this.showUpdateRole = true
    }
    
    // this.showUpdate = !this.showUpdate;

    console.log("aaaa")

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

    this.showSearchOfficerRole= true;
    this.showSearchOfficer= false;
  
    this.showOfficerRoleList = true;
    this.showOfficerList = false;
    this.showInfo = false;
    this.showUpdateRole =false;
    this.showUpdateRole1 =false;
  }



  //start data table
  //
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/application-status-officer-view.json`);

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
   tableEntries: number = 10;
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

  }

  officerRoleList = [
    {
      nric: "990521036542",
      name: "Mustafa bin Ali",
      state: "Selangor",
      position: "Pembantu Tadbir",
      role: "Pegawai Pemproses Negeri",
      status: "Aktif"
    },
    {
      nric: "671217029874",
      name: "Roslan bin Dahlan",
      state: "Perak",
      position: "Pembantu Tadbir",
      role: "Pegawai Pemproses Negeri",
      status: "Tak Aktif"
    },
    {
      nric: "854123074985",
      name: "Nora binti Arshad",
      state: "Melaka",
      position: "Pembantu Tadbir",
      role: "Pegawai Pemproses HQ",
      status: "Aktif"
    },
    {
      nric: "671217029874",
      name: "Aliya binti Harun",
      state: "Pahang",
      position: "Penolong Pegawai Tadbir",
      role: "Pelulus",
      status: "Tak Aktif"
    },
    {
      nric: "900401085641",
      name: "Amin bin Redzuan",
      state: "Pahang",
      position: "Penolong Pengarah",
      role: "Penyokong",
      status: "Aktif"
    },
    {
      nric: "900401085641",
      name: "Yusuf bin Rahman",
      state: "Kedah",
      position: "Pengarah Negeri",
      role: "Pentadbir Pengurusan Maklumat",
      status: "Aktif"
    },
  ]

  officerList = [
    {
      nric: "990521036542",
      name: "Mustafa bin Ali",
      state: "Selangor",
      position: "Pembantu Tadbir",
      role: "Pegawai Pemproses Negeri",
      status: "Aktif"
    },
    {
      nric: "671217029874",
      name: "Roslan bin Dahlan",
      state: "Perak",
      position: "Pembantu Tadbir",
      role: "Pegawai Pemproses Negeri",
      status: "Tak Aktif"
    },
    {
      nric: "854123074985",
      name: "Nora binti Arshad",
      state: "Melaka",
      position: "Pembantu Tadbir",
      role: "Pegawai Pemproses HQ",
      status: "Aktif"
    },
    {
      nric: "671217029874",
      name: "Aliya binti Harun",
      state: "Pahang",
      position: "Penolong Pegawai Tadbir",
      role: "Pelulus",
      status: "Tak Aktif"
    },
    {
      nric: "900401085641",
      name: "Amin bin Redzuan",
      state: "Pahang",
      position: "Penolong Pengarah",
      role: "Penyokong",
      status: "Aktif"
    },
    {
      nric: "900401085641",
      name: "Yusuf bin Rahman",
      state: "Kedah",
      position: "Pengarah Negeri",
      role: "Pentadbir Pengurusan Maklumat",
      status: "Aktif"
    },
  ]




}