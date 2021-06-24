import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { event } from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

@Component({
  selector: 'app-faq-administration',
  templateUrl: './faq-administration.component.html',
  styleUrls: ['./faq-administration.component.scss']
})
export class FaqAdministrationComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;
  faqcat;

  constructor(
    private modalService: BsModalService,
    private pentadbir:PentadbirService
  ) {
    this.pentadbir.retrieveFAQ().subscribe(res=>{
      this.rows = res
    })

    this.pentadbir.getAllActiveKategori().subscribe(res=>{
      this.faqcat = res
    })
  }

  //Modal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;


  AddNewCategory(template) {
    this.modalRef = this.modalService.show(template,
      { class: 'modal-sm' }
    );
  }

  getStatus;
  jenis_kategori;

  createCategory(){
    let ff = new FormData();
    ff.append("jenis_kategori", this.jenis_kategori);
    ff.append("status",this.getStatus);

    this.pentadbir.newFaqKategori(ff).subscribe((res) => {
      this.closeModal();
      }, () => {

      }, () => {
  
      }
    )
  }

  addsuccess(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template,
      { class: 'modal-sm' }
    );
  }

  addfaq(template){
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  addFaqSuccess(template){
    var pass1 = (<HTMLInputElement>document.getElementById('title1')).value;
    var pass2 = (<HTMLInputElement>document.getElementById('title2')).value;
    var kandungan_ms = (<HTMLInputElement>document.getElementById('content1')).value;
    var tandungan_en = (<HTMLInputElement>document.getElementById('content2')).value;
    var kategori_id = (<HTMLInputElement>document.getElementById('cat')).value;
  
    let ff = new FormData();
    ff.append("kategori_id", this.kategori_id);
    ff.append("tajuk_ms",this.tajuk_ms);
    ff.append("tajuk_en",this.tajuk_en)
    ff.append("kandungan_ms",this.kandungan_ms);
    ff.append("kandungan_en",this.kandungan_en)
    ff.append("turutan",this.turutan)
    ff.append("status",this.status)

    this.pentadbir.newSoalanLazim(ff).subscribe((res) => {
      this.closeModal();
        this.modalRef2 = this.modalService.show(template,
          { class: 'modal-sm' }
        );
      }, () => {

      }, () => {
  
      }
    )
  }

  editFaqSuccess(template){
    this.closeModal();
      this.modalRef2 = this.modalService.show(template,
        { class: 'modal-sm' }
      );
    }

  editFaq(template){
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  deletefaq(template){
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirmDelete(template){
    this.closeModal();
      this.modalRef2 = this.modalService.show(template,
        { class: 'modal-sm' }
      );
  }


  closeModal() {
    this.modalRef.hide();
  }

  closeModal2() {
    this.modalRef2.hide();
  }



  //start data table

  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  updateFilter(event) {
    console.log(this.temp)
    const val = event.target.value.toLowerCase();

    console.log("Aaaaaaa", val)
    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        // (d.id.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.title.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.type.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.content.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.date.toLowerCase().indexOf(val) !== -1 || !val)
      );
    });

    // update the rows
    // this.faq = temp;
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

  kategori_id;
  tajuk_ms;
  tajuk_en;
  kandungan_ms;
  kandungan_en;
  turutan;
  status;
  
  ngOnInit(): void {
    // this.fetch(data => {
    //   // cache our list
    //   this.temp = data;

    //   // push our inital complete list
    //   this.rows = data;
    // });
    
    this.temp = this.rows



  }

  // category = [
  //   "umum",
  //   "perdagangan",
  //   "kepenggunaan"
  // ]


  // faq = [
  //   {
  //     category: "Umum",
  //     title: "Apakah syarat-syarat untuk menjadi Ejen Pemilikan Semula?",
  //     content: "Warganegara Malaysia",
  //     arrangement: "2",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  //   {
  //     category: "Umum",
  //     title: "Bilakah syarat ini mula dikuatkuasa?",
  //     content: "25 Februari 2021",
  //     arrangement: "3",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  //   {
  //     category: "Umum",
  //     title: "Apakah hak-hak pengguna?",
  //     content: "Melaporkan kepada pihak 4 berkuasa",
  //     arrangement: "1",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  //   {
  //     category: "Umum",
  //     title: "Bagaimana menjadi pengguna yang bijak?",
  //     content: "Memilih barangan yang berkualiti",
  //     arrangement: "4",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  //   {
  //     category: "Kepenggunaan",
  //     title: "Bagaimana menjadi pengguna yang bijak?",
  //     content: "Memilih barangan yang berkualiti",
  //     arrangement: "1",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  //   {
  //     category: "Kepenggunaan",
  //     title: "Apakah hak-hak pengguna?",
  //     content: "Melaporkan kepada pihak 4 berkuasa",
  //     arrangement: "2",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  //   {
  //     category: "Kepenggunaan",
  //     title: "Bagaimana menjadi pengguna yang bijak?",
  //     content: "Memilih barangan yang berkualiti",
  //     arrangement: "3",
  //     date: "08/01/2021",
  //     status: "Aktif"
  //   },
  // ]

}