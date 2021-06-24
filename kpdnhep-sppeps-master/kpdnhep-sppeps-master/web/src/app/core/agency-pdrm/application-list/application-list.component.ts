import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  constructor(private pentadbir: PentadbirService) {
    this.pentadbir.getAllActivePDRM().subscribe((res)=>{
      this.rows = res;
    })
  }

  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        (d.type.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.name.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.id.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.date.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.area.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.state.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.officer.toLowerCase().indexOf(val) !== -1 || !val) 
      );
    });

    // update the rows
    this.rows = temp;
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

  }

}