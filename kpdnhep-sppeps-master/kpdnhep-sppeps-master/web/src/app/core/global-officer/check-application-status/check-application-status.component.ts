import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-check-application-status',
  templateUrl: './check-application-status.component.html',
  styleUrls: ['./check-application-status.component.scss']
})
export class CheckApplicationStatusComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  public show:boolean = false;
  
  //hide and show div
  toggle() {
    this.show = true;
  }
  reset() {
    this.show = false;
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

  updateFilter() {
    // const val = event.target.value.toLowerCase();
    // console.log("bb", val)
    const nric = (<HTMLInputElement>document.getElementById('nric')).value;;
    console.log("AAA", nric)
    // filter our data
    if (nric != "") {
      console.log(this.temp)
      const temp = this.temp.filter(function (d) {
        return (
          (d.id.indexOf(nric) !== -1 || !nric)
        );
      });

      console.log(temp)
      // update the rows
      this.rows = temp;
      console.log(this.rows)

      this.toggle();
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

}