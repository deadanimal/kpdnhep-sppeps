import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-blacklist-application',
  templateUrl: './blacklist-application.component.html',
  styleUrls: ['./blacklist-application.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('500ms ease-in'))
    ])
  ]
})
export class BlacklistApplicationComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  // showTable = false;
  public showTable: boolean = false;

  constructor(
    private modalService: BsModalService,
  ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  toggleShowTable() {
    this.showTable = true;
  }

  reset() {
    this.showTable = false;
  }

  //start data table
  //
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/approved-list.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter() {
    // const val = event.target.value.toLowerCase();
    // console.log("bb", val)
    const nric = (<HTMLInputElement>document.getElementById('nric')).value;
    console.log("AAA", nric)
    // filter our data
    if (nric != "") {
      console.log(this.temp)
      const temp = this.temp.filter(function (d) {
        return (
          // (d.type.toLowerCase().indexOf(val) !== -1 || !val) ||
          // (d.name.toLowerCase().indexOf(val) !== -1 || !val) ||
          (d.id.indexOf(nric) !== -1 || !nric)
          // (d.date.toLowerCase().indexOf(val) !== -1 || !val) ||
          // (d.area.toLowerCase().indexOf(val) !== -1 || !val) ||
          // (d.state.toLowerCase().indexOf(val) !== -1 || !val) ||
          // (d.officer.toLowerCase().indexOf(val) !== -1 || !val) 
        );
      });

      console.log(temp)
      // update the rows
      this.rows = temp;
      console.log(this.rows)

      this.toggleShowTable();
    }
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

  }

  //change card content
  appLog = 1;
  onShowApplicationLog() {
    // this.showLog = true;
    this.rotate();

    this.appLog = this.appLog + 1;

    if (this.appLog == 5)
      this.appLog = 1

    return this.appLog
  }
  inprocess = 1;
  onShowInProcess() {
    // this.showLog = true;
    this.rotateInProcess();

    this.inprocess = this.inprocess + 1;

    if (this.inprocess == 5)
      this.inprocess = 1

    return this.inprocess
  }

  finished = 1;
  onShowFinishied() {
    // this.showLog = true;
    this.rotateFinished();

    this.finished = this.finished + 1;

    if (this.finished == 5)
      this.finished = 1

    return this.finished
  }

  //rotate icon
  rotateApp: string = 'default';
  rotate() {
    this.rotateApp = (this.rotateApp === 'default' ? 'rotated' : 'default');
  }
  rotateInProg: string = 'default';
  rotateInProcess() {
    this.rotateInProg = (this.rotateInProg === 'default' ? 'rotated' : 'default');
  }

  rotatefinished: string = 'default';
  rotateFinished() {
    this.rotatefinished = (this.rotatefinished === 'default' ? 'rotated' : 'default');
  }


  //Modal

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  cancelPermit(template) {
    this.modalRef = this.modalService.show(template);
  }

  confirmCancelPermit(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  cancelPermitSuccess(template) {
    this.closeModal2();
    this.modalRef3 = this.modalService.show(template);
  }

  // cancelPermit(){

  closeModal() {
    this.modalRef.hide()
  }

  closeModal2() {
    this.modalRef2.hide()
  }

  closeModal3() {
    this.modalRef3.hide()
  }

}


