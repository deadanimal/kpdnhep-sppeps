import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-checked-application-list',
  templateUrl: './checked-application-list.component.html',
  styleUrls: ['./checked-application-list.component.scss']
})
export class CheckedApplicationListComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;
  
  constructor(private modalService: BsModalService, private pentadbir: PentadbirService) {
    this.pentadbir.getAllCompletedPDRM().subscribe((res) => {
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
     this.tableEntries = $event.target.value;
   }

   //end datatable


  ngOnInit(): void {

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
        class: 'modal-dialog-centered',
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
        class: 'modal-dialog-centered',
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
        class: 'modal-dialog-centered',
        ignoreBackdropClick: true,
        keyboard: true,
        backdrop: true
      }
    );
  }

  confirmDelete(){
    
  }
  
  //close modal
  closeModal(){
    this.modalRef.hide();
  }
  closeModal2(){
    this.modalRef2.hide();
  }

}