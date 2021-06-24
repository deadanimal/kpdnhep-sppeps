import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-support-application-list',
  templateUrl: './support-application-list.component.html',
  styleUrls: ['./support-application-list.component.scss'],
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
export class SupportApplicationListComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  constructor(private pentadbir: PentadbirService) {
    this.pentadbir.getAllActivePPY().subscribe((res) => {
      this.rows = res;
    })
  }



  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter(event) {
    // const val = event.target.value.toLowerCase();

    const state = (<HTMLInputElement>document.getElementById('state')).value.toLowerCase();
    const nric = (<HTMLInputElement>document.getElementById('nric')).value.toLowerCase();
    const appliType = (<HTMLInputElement>document.getElementById('appli-type')).value.toLowerCase();
    console.log("AAA", state, nric, appliType)

    // filter our data
    const temp = this.temp.filter(function (d) {
      if (state != "" && nric == "" && appliType == "")
        return (
          (d.state.toLowerCase().indexOf(state) !== -1 || !state)
        );
      else if (state == "" && nric != "" && appliType == "")
        return (
          (d.id.toLowerCase().indexOf(nric) !== -1 || !nric) 
        );
        else if (state == "" && nric == "" && appliType != "")
        return (
          (d.type.toLowerCase().indexOf(appliType) !== -1 || !appliType)
        );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
  }

  reset() {
    this.rows = this.temp
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

}