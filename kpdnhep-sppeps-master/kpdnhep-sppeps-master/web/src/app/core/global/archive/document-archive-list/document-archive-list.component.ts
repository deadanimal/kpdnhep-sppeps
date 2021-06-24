import { Component, OnInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-document-archive-list',
  templateUrl: './document-archive-list.component.html',
  styleUrls: ['./document-archive-list.component.scss']
})
export class DocumentArchiveListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rows = [];
  ColumnMode = ColumnMode;

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

  data=[
    { title:"Manual Pengguna Sistem Percetakan Permit Ejen Pemilikan Semula 2020", comment:"Manual Pengguna Sistem Percetakan Permit Ejen Pemilikan Semula 2020", date:"08/01/2020"},
    { title:"Manual Pengguna Sistem Percetakan Permit Ejen Pemilikan Semula 2019", comment:"Manual Pengguna Sistem Percetakan Permit Ejen Pemilikan Semula 2019", date:"08/01/2020"},
    { title:"Manual Pengguna Sistem Percetakan Permit Ejen Pemilikan Semula 2018", comment:"Manual Pengguna Sistem Percetakan Permit Ejen Pemilikan Semula 2018", date:"08/01/2020"},
  ];
}
