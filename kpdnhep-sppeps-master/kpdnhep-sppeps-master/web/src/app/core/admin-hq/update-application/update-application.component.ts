import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.scss']
})
export class UpdateApplicationComponent implements OnInit {

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

  public showSearch: boolean = true;
  public showApplicationList: boolean = true;
  public showApplicationInfo: boolean = false;


  //hide and show div

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  toggleShowApplicantLogList() {
    this.showApplicationList = !this.showApplicationList;
  }

  toggleShowApplicationInfo() {
    this.showSearch = !this.showSearch;
    this.showApplicationList = !this.showApplicationList;
    this.showApplicationInfo = !this.showApplicationInfo;
  }

  reset() {
    this.showSearch = !this.showSearch;
    this.showApplicationList = !this.showApplicationList;
    this.showApplicationInfo = !this.showApplicationInfo;
  }





  public filterLog: any;
  onSubmit() {
    this.filterLog = (<HTMLInputElement>document.getElementById('log')).value;
    console.log("log", this.filterLog)

    // this.toggleSearch();
    this.toggleShowApplicantLogList();


  }

  //Modal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  updateSuccess(template) {
    this.modalRef = this.modalService.show(template,
      {
        // class: 'modal-xl',
        ignoreBackdropClick: true
      }
    );
  }


  resetApplication(template) {
    this.modalRef2 = this.modalService.show(template,
      {
        // class: 'modal-xl',
        // ignoreBackdropClick: true
      }
    );
  }

  confirmReset(template) {
    this.closeModal2()
    this.modalRef3 = this.modalService.show(template,
      {
        // class: 'modal-xl',
        // ignoreBackdropClick: true
      }
    );
  }

  closeModal() {
    this.modalRef.hide();
  }

  closeModal2() {
    this.modalRef2.hide();
  }

  closeModal3() {
    this.modalRef3.hide();
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
      "category": "Pegawai Pemproses Negeri",
      "date": "15/02/2021",
      "email": "awam@gmail.com",
      "ip": "123.456.789.115",
      "status": "Diluluskan",
      "state": "Selangor",
      "position": "Pembantu Tadbir",
      "nric": "970529807922",
      "officerName": "Najmah binti Baharom",
      "permitNumber": "67313"
    },
    {
      "name": "Kassim Bin Abdullah",
      "category": "Pegawai Pemproses Negeri",
      "date": "17/02/2021",
      "email": "example@gmail.com",
      "ip": "169.254.71.412",
      "status": "Diluluskan",
      "state": "Pahang",
      "position": "Pembantu Tadbir",
      "nric": "900430039011",
      "officerName": "",
      "permitNumber": "89328"
    },
    {
      "name": "Zaini Ahmad",
      "category": "Pegawai Pemproses HQ",
      "date": "23/12/2020",
      "email": "nora@kpdnhep.gov.my",
      "ip": "10.19.1.172",
      "status": "Diluluskan",
      "state": "Pahang",
      "position": "Pembantu Tadbir",
      "nric": "890102030989",
      "officerName": "",
      "permitNumber": "67316"
    },
    {
      "name": "Siti Rohaya",
      "category": "Pegawai Pemproses Negeri",
      "date": "23/12/2020",
      "email": "aliya@kpdnhep.gov.my",
      "ip": "10.19.1.233",
      "status": "Diluluskan",
      "state": "Perak",
      "position": "Pembantu Tadbir",
      "nric": "950209087901",
      "officerName": "",
      "permitNumber": "12345"
    },
    {
      "name": "Zainoor Binti Zainol Abidin",
      "category": "Pentadbir Sistem HQ",
      "date": "23/12/2020",
      "email": "amin@kpdnhep.gov.my",
      "ip": "10.19.1.233",
      "status": "Diluluskan",
      "state": "W. P. Putrajaya",
      "position": "Penolong Pegawai Tadbir",
      "nric": "990209057901",
      "officerName": "",
      "permitNumber": "02193"
    },
    {
      "name": "Amiruldin Amri",
      "category": "Pegawai Pemproses Negeri",
      "date": "23/12/2020",
      "email": "fahmi@yahoo.com.my",
      "ip": "169.254.63.568",
      "status": "Diluluskan",
      "state": "Johor",
      "position": "Penolong Pengarah",
      "nric": "9507069087771",
      "officerName": "",
      "permitNumber": "32109"
    },
    {
      "name": "Azri Yahya",
      "category": "Pegawai Pemproses Negeri",
      "date": "24/12/2020",
      "email": "yusuf@yahoo.com.my",
      "ip": "169.254.63.568",
      "status": "Diluluskan",
      "state": "Perlis",
      "position": "Pembantu Tadbir",
      "nric": "931209087080",
      "officerName": "",
      "permitNumber": "89182"
    },
    {
      "name": "Razlin Ahmad",
      "category": "Pegawai Pemproses HQ",
      "date": "23/12/2020",
      "email": "nora@kpdnhep.gov.my",
      "ip": "10.19.1.172",
      "status": "Diluluskan",
      "state": "Perlis",
      "position": "Penolong Pengarah",
      "nric": "970509085559",
      "officerName": "",
      "permitNumber": "76129"
    },
    {
      "name": "Nurtasha",
      "category": "Pegawai Pemproses Negeri",
      "date": "23/12/2020",
      "email": "abu@kpdnhep.gov.my",
      "ip": "10.19.1.196",
      "status": "Diluluskan",
      "state": "Kedah",
      "position": "Pengarah Negeri",
      "nric": "951109088967",
      "officerName": "",
      "permitNumber": "89181"
    },
    {
      "name": "Amin Redzuan",
      "category": "Pentadbir Pengurusan Maklumat",
      "date": "22/11/2020",
      "email": "hafiz@kpdnhep.gov.my",
      "ip": "10.19.1.180",
      "status": "Diluluskan",
      "state": "Melaka",
      "position": "Pembantu Tadbir",
      "nric": "989697944478",
      "officerName": "",
      "permitNumber": "76832"
    }
  ]

  applicantLogs = [
    {
      date: "15/01/2021 10:23",
      action: "Hapus",
      officerName: "Najmah binti Baharom",
      description: "Tukar Status dari Pembaharuan ke Permohonan Pembaharuan Tidak Disokong",
    },
    {
      date: "15/01/2021 10:23",
      action: "Cipta",
      officerName: "Fairuz binti Mohd Faizah",
      description: "Tukar Status dari Lulus ke Pembaharuan",
    },
    {
      date: "15/01/2021 10:23",
      action: "Kemaskini",
      officerName: "Muslimun bin Md Yusof",
      description: "Kemaskini maklumat pemohon",
    },
    {
      date: "24/01/2021 14:26",
      action: "Hapus",
      officerName: "Zalirizal bin Abdul Rahman",
      description: "Tukar Status dari Permohonan Pembaharuan Disokong ke Lulus",
    },
    {
      date: "24/01/2021 14:26",
      action: "Hapus",
      officerName: "Siti Azlina binti Kosnan",
      description: "Tukar Status dari Pembaharuan ke Permohonan Pembaharuan Disokong",
    },
    {
      date: "30/01/2021 12:20",
      action: "Kemaskini",
      officerName: "Muslimun bin Md Yusof",
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