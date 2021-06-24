import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-applicants-logs',
  templateUrl: './applicants-logs.component.html',
  styleUrls: ['./applicants-logs.component.scss']
})
export class ApplicantsLogsComponent implements OnInit {

  editing = {};
  rows = [];
  
  ColumnMode = ColumnMode;

  public name: "Yuzrita binti Md. Yusoff"

  constructor(
    private modalService: BsModalService,
  ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  public showSearch:boolean = true;
  public showApplicantLogList:boolean = true;
  public showApplicantLog:boolean = false;


  //hide and show div

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }

  toggleShowApplicantLogList(){
    this.showApplicantLogList = !this.showApplicantLogList;
  }

  toggleShowApplicantLog(){

    this.toggleSearch()
    this.toggleShowApplicantLogList()
    this.showApplicantLog = !this.showApplicantLog;
  }



  public filterLog: any;
  onSubmit(){
    this.filterLog = (<HTMLInputElement>document.getElementById('log')).value;
    console.log("log", this.filterLog)

    // this.toggleSearch();
    this.toggleShowApplicantLogList();

  
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

   applicantList = [
    {
        "name": "Zuraidah Binti Ahmad",
        "category":"Pegawai Pemproses Negeri",
        "date":"15/02/2021",
        "email":"awam@gmail.com",
        "ip":"123.456.789.115",
        "status":"Aktif",
        "state":"Selangor",
        "position":"Pembantu Tadbir",
        "nric" : "970529807922",
        "officerName":"Najmah binti Baharom"
    },
    {
        "name": "Kassim Bin Abdullah",
        "category":"Pegawai Pemproses Negeri",
        "date":"17/02/2021",
        "email":"example@gmail.com",
        "ip":"169.254.71.412",
        "status":"Tak Aktif",
        "state":"Pahang",
        "position":"Pembantu Tadbir",
        "nric" : "900430039011",
        "officerName":""
    },
    {
        "name": "Zaini Ahmad",
        "category":"Pegawai Pemproses HQ",
        "date":"23/12/2020",
        "email":"nora@kpdnhep.gov.my",
        "ip":"10.19.1.172",
        "status":"Aktif",
        "state":"Pahang",
        "position":"Pembantu Tadbir",
        "nric" : "890102030989",
        "officerName":""
    },
    {
        "name": "Siti Rohaya",
        "category":"Pegawai Pemproses Negeri",
        "date":"23/12/2020",
        "email":"aliya@kpdnhep.gov.my",
        "ip":"10.19.1.233",
        "status":"Aktif",
        "state":"Perak",
        "position":"Pembantu Tadbir",
        "nric": "950209087901",
        "officerName":""
    },
    {
        "name":"Zainoor Binti Zainol Abidin",
        "category":"Pentadbir Sistem HQ",
        "date":"23/12/2020",
        "email":"amin@kpdnhep.gov.my",
        "ip":"10.19.1.233",
        "status":"Tak Aktif",
        "state":"W. P. Putrajaya",
        "position":"Penolong Pegawai Tadbir",
        "nric": "990209057901",
        "officerName":""
    },
    {
        "name": "Amiruldin Amri",
        "category":"Pegawai Pemproses Negeri",
        "date":"23/12/2020",
        "email":"fahmi@yahoo.com.my",
        "ip":"169.254.63.568",
        "status":"Tak Aktif",
        "state":"Johor",
        "position":"Penolong Pengarah",
        "nric": "9507069087771",
        "officerName":""
    },
    {
        "name": "Azri Yahya",
        "category":"Pegawai Pemproses Negeri",
        "date":"24/12/2020",
        "email":"yusuf@yahoo.com.my",
        "ip":"169.254.63.568",
        "status":"Aktif",
        "state":"Perlis",
        "position":"Pembantu Tadbir",
        "nric": "931209087080",
        "officerName":""
    },
    {
        "name": "Razlin Ahmad",
        "category":"Pegawai Pemproses HQ",
        "date":"23/12/2020",
        "email":"nora@kpdnhep.gov.my",
        "ip":"10.19.1.172",
        "status":"Aktif",
        "state":"Perlis",
        "position":"Penolong Pengarah",
        "nric": "970509085559",
        "officerName":""
    },
    {
        "name": "Nurtasha",
        "category":"Pegawai Pemproses Negeri",
        "date":"23/12/2020",
        "email":"abu@kpdnhep.gov.my",
        "ip":"10.19.1.196",
        "status":"Tak Aktif",
        "state":"Kedah",
        "position":"Pengarah Negeri",
        "nric": "951109088967",
        "officerName":""
    },
    {
        "name": "Amin Redzuan",
        "category":"Pentadbir Pengurusan Maklumat",
        "date":"22/11/2020",
        "email":"hafiz@kpdnhep.gov.my",
        "ip":"10.19.1.180",
        "status":"Aktif",
        "state":"Melaka",
        "position":"Pembantu Tadbir",
        "nric": "989697944478",
        "officerName":""
    }
]

   applicantLogs = [
     {
       date: "15/01/2021 10:23",
       action: "Hapus",
       officerName:"Najmah binti Baharom",
       description: "Tukar Status dari Pembaharuan ke Permohonan Pembaharuan Tidak Disokong",
     },
     {
      date: "15/01/2021 10:23",
      action: "Cipta",
      officerName:"Fairuz binti Mohd Faizah",
      description: "Tukar Status dari Lulus ke Pembaharuan",
    },
    {
      date: "15/01/2021 10:23",
      action: "Kemaskini",
      officerName:"Muslimun bin Md Yusof",
      description: "Kemaskini maklumat pemohon",
    },
    {
      date: "24/01/2021 14:26",
      action: "Hapus",
      officerName:"Zalirizal bin Abdul Rahman",
      description: "Tukar Status dari Permohonan Pembaharuan Disokong ke Lulus",
    },
    {
      date: "24/01/2021 14:26",
      action: "Hapus",
      officerName:"Siti Azlina binti Kosnan",
      description: "Tukar Status dari Pembaharuan ke Permohonan Pembaharuan Disokong",
    },
    {
      date: "30/01/2021 12:20",
      action: "Kemaskini",
      officerName:"Muslimun bin Md Yusof",
      description: "Tukar Status dari Pembaharuan ke Permohonan Pembaharuan Tidak Disokong",
    }
   ]

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