import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-completed-application-list',
  templateUrl: './completed-application-list.component.html',
  styleUrls: ['./completed-application-list.component.scss']
})
export class CompletedApplicationListComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  constructor(private pentadbir: PentadbirService) {
    this.pentadbir.getAllCompletedPPY().subscribe((res) => {
      this.rows = res
    })
  }

 

  // updateValue(event, cell, rowIndex) {
  //   console.log('inline editing rowIndex', rowIndex);
  //   this.editing[rowIndex + '-' + cell] = false;
  //   this.rows[rowIndex][cell] = event.target.value;
  //   this.rows = [...this.rows];
  //   console.log('UPDATED!', this.rows[rowIndex][cell]);
  // }

  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter(event) {
    // const val = event.target.value.toLowerCase();

    // const state = (<HTMLInputElement>document.getElementById('state')).value.toLowerCase();
    const nric = (<HTMLInputElement>document.getElementById('nric')).value.toLowerCase();
    // const appliType = (<HTMLInputElement>document.getElementById('appli-type')).value.toLowerCase();
    // console.log("AAA", state, nric, appliType)

    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        (d.id.toLowerCase().indexOf(nric) !== -1 || !nric)
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
  }

  reset(){
    this.rows = this.temp
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();

  //   // filter our data
  //   const temp = this.temp.filter(function (d) {
  //     return (
  //       (d.type.toLowerCase().indexOf(val) !== -1 || !val) ||
  //       (d.name.toLowerCase().indexOf(val) !== -1 || !val) ||
  //       (d.id.toLowerCase().indexOf(val) !== -1 || !val) ||
  //       (d.date.toLowerCase().indexOf(val) !== -1 || !val) ||
  //       (d.area.toLowerCase().indexOf(val) !== -1 || !val) ||
  //       (d.state.toLowerCase().indexOf(val) !== -1 || !val) ||
  //       (d.officer.toLowerCase().indexOf(val) !== -1 || !val) 
  //     );
  //   });

  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.myFilterTable.offset = 0;
  // }

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
 

  }

}