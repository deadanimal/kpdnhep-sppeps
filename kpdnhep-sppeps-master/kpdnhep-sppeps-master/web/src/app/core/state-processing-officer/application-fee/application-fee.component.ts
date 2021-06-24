import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { count } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-application-fee',
  templateUrl: './application-fee.component.html',
  styleUrls: ['./application-fee.component.scss'],
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
export class ApplicationFeeComponent implements OnInit {

  // filter
  selectedState: any;
  selectedNRIC: any;
  selectedApplication: any;


  editing = {};
  rows = [];
  temp = [];
  ColumnMode = ColumnMode;

  //toggle button
  updateButton: boolean= false;
  viewButton: boolean= false;
  deleteButton: boolean= false;



  constructor(private modalService: BsModalService,) {
    // this.fetch(data => {
    //   this.rows = data;
    // });
  }

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/data/application-list.json`);

  //   req.onload = () => {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };

  //   req.send();
  // }

  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  // selectState(event) {
  //   this.selectedState = event.target.value.toLowerCase();
  // }

  // selectApplication(event) {
  //   this.selectedApplication = event.target.value.toLowerCase();
  // }

  updateFilter(event) {
    console.log(this.temp)

    const val = event.target.value.toLowerCase();

    console.log("Aaaaaaa", val)
    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        // (d.id.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.id.toLowerCase().indexOf(val) !== -1 || !val)
        // (d.category.toLowerCase().indexOf(val) !== -1 || !val) ||
        // (d.content.toLowerCase().indexOf(val) !== -1 || !val) ||
        // (d.date.toLowerCase().indexOf(val) !== -1 || !val)
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
    // this.fetch(data => {
    //   // cache our list
    //   this.temp = data;

    //   // push our inital complete list
    //   this.rows = data;
    // });
    this.temp = this.data;

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


  // modal

  //openmodal
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  modalRef4: BsModalRef;

  updateManualPayment(template) {

    this.modalRef = this.modalService.show(template,
      { class: 'modal-lg' }
    );
  }

  updateOnlinePayment(template) {

    this.modalRef = this.modalService.show(template,
      { class: 'modal-lg' }
    );
  }

  Pay(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template)
  }

  confirmPay(template) {
    this.closeModal2();
    this.modalRef3 = this.modalService.show(template)
  }

  printPermit(template) {
    this.modalRef = this.modalService.show(template);
  }

  confirmPrint(template) {
    this.closeModal();
    this.modalRef2 = this.modalService.show(template);
  }

  //close modal

  closeModal() {
    this.modalRef.hide();
  }

  closeModal2() {
    this.modalRef2.hide()
  }

  closeModal3() {
    this.modalRef3.hide()
  }


  data = [

    {
      type: "Permohonan Baharu",
      name: "Mustafa bin Ali",
      id: "PB202102001",
      date: "15/02/2021 10:39:12",
      area: "Petaling Jaya",
      state: "Selangor",
      officer: "Suraya bin Abdullah",
      status: "Telah Dibayar"
    },
    {
      type: "Permohonan Baharu",
      name: "Roslan bin Dahlan",
      id: "PB202102002",
      date: "06/01/2021 14:36:50",
      area: "Sungai Petani",
      state: "Kedah",
      officer: "Rosnah binti Yahya",
      status: "Belum Bayar"
    },
    {
      type: "Permohonan Rayuan",
      name: "Nora binti Arshad",
      id: "PR202102002",
      date: "23/12/2020 15:41:02",
      area: "Ipoh",
      state: "Perak",
      officer: "Megat Zakaria",
      status: "Telah Dibayar"
    },
    {
      type: "Permohonan Pendua",
      name: "Aliya binti Harun",
      id: "PD202102002",
      date: "20/12/2020 18:21:13",
      area: "Ipoh",
      state: "Perak",
      officer: "Dahlia Rossa",
      status: "Belum Bayar"
    },
    {
      type: "Permohonan Pembaharuan",
      name: "Amin bin Redzuan",
      id: "PP202102002",
      date: "05/12/2020 11:11:11",
      area: "Shah Alam",
      state: "Selangor",
      officer: "Dahlia Rossa",
      status: "Telah Dibayar"
    },
    {
      type: "Permohonan Pembaharuan",
      name: "Yusuf bin Rahman",
      id: "PB202102003",
      date: "05/12/2020 08:24:59",
      area: "Kuantan",
      state: "Pahang",
      officer: "Suraya bin Abdullah",
      status: "Belum Bayar"
    },
    {
      type: "Permohonan Rayuan",
      name: "Rahimah binti Abu",
      id: "PB202102004",
      date: "22/11/2020 15:33:12",
      area: "Kuantan",
      state: "Pahang",
      officer: "Rosnah binti Yahya",
      status: "Belum Bayar"
    },
    {
      type: "Permohonan Rayuan",
      name: "Yuslina binti Abdullah",
      id: "PB202102005",
      date: "22/11/2020 15:01:48",
      area: "Seremban",
      state: "Negeri Sembilan",
      officer: "Megat Zakaria",
      status: "Belum Bayar"
    },
    {
      type: "Permohonan Pendua",
      name: "Maryam bin Abu Bakar",
      id: "PB202102006",
      date: "22/11/2020 11:39:52",
      area: "Seremban",
      state: "Negeri Sembilan",
      officer: "Megat Zakaria",
      status: "Belum Bayar"
    },
    {
      type: "Permohonan Pendua",
      name: "Nurlina binti Alias",
      id: "PB202102007",
      date: "22/11/2020 11:39:52",
      area: "Seremban",
      state: "Negeri Sembilan",
      officer: "Megat Zakaria",
      status: "Belum Bayar"
    },
  ]


}