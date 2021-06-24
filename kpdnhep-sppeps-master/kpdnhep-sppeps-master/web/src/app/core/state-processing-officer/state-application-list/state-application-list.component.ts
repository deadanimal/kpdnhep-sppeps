import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { count } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';


@Component({
  selector: 'app-state-application-list',
  templateUrl: './state-application-list.component.html',
  styleUrls: ['./state-application-list.component.scss'],
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


export class StateApplicationListComponent implements OnInit {

  // filter
  selectedState: any;
  selectedNRIC: any;
  selectedApplication: any;


  editing = {};
  rows = [];
  ColumnMode = ColumnMode;
  userdata = [];
  i ;
  id;
  col:any;
  constructor( private pentadbir: PentadbirService) {
    this.pentadbir.getAllActivePPN().subscribe(res=>{
      this.rows = res;

    })
  }


  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;

  selectState(event) {
    this.selectedState = event.target.value.toLowerCase();
  }

  selectApplication(event) {
    this.selectedApplication = event.target.value.toLowerCase();
  }

  updateFilter() {
    console.log("state", this.selectedState, "nric", this.selectedNRIC, "appli", this.selectedApplication)

    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        (d.type.toLowerCase().indexOf(this.selectedApplication) !== -1 || !this.selectedApplication) ||
        // (d.name.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.id.toLowerCase().indexOf(this.selectedNRIC) !== -1 || !this.selectedNRIC) ||
        // (d.date.toLowerCase().indexOf(val) !== -1 || !val) ||
        // (d.area.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.state.toLowerCase().indexOf(this.selectedState) !== -1 || !this.selectedState) 
        // (d.officer.toLowerCase().indexOf(val) !== -1 || !val)
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

    this.temp = this.rows

  }

  // count: number = 1;
  // toggle() {
  //   this.count = this.count + 1;

  //   if (this.count = 4)
  //     this.count = 1;

  //   return this.count;
  // }

  // item = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }];
  // selectedValue: string = 'One';



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

  //data
//   data = [
//     {
//         "type":"Permohonan Baharu",
//         "name":"Mustafa bin Ali",
//         "id":"PB202102001",
//         "date":"15/02/2021 10:39:12",
//         "area":"Petaling Jaya",
//         "state":"Selangor",
//         "officer":"Suraya bin Abdullah",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Roslan bin Dahlan",
//         "id":"PB202102002",
//         "date":"06/01/2021 14:36:50",
//         "area":"Sungai Petani",
//         "state":"Kedah",
//         "officer":"Rosnah binti Yahya",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Pembaharuan",
//         "name":"Nora binti Arshad",
//         "id":"PR202102002",
//         "date":"23/12/2020 15:41:02",
//         "area":"Ipoh",
//         "state":"Perak",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Pembaharuan",
//         "name":"Aliya binti Harun",
//         "id":"PD202102002",
//         "date":"20/12/2020 18:21:13",
//         "area":"Ipoh",
//         "state":"Perak",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Pembaharuan",
//         "name":"Amin bin Redzuan",
//         "id":"PP202102002",
//         "date":"05/12/2020 11:11:11",
//         "area":"Shah Alam",
//         "state":"Selangor",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Pembaharuan",
//         "name":"Yusuf bin Rahman",
//         "id":"PB202102003",
//         "date":"05/12/2020 08:24:59",
//         "area":"Kuantan",
//         "state":"Pahang",
//         "officer":"Suraya bin Abdullah",
//         "status":"Dalam Proses"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Rahimah binti Abu",
//         "id":"PB202102004",
//         "date":"22/11/2020 15:33:12",
//         "area":"Kuantan",
//         "state":"Pahang",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Yuslina binti Abdullah",
//         "id":"PB202102005",
//         "date":"22/11/2020 15:01:48",
//         "area":"Seremban",
//         "state":"Negeri Sembilan",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Maryam bin Abu Bakar",
//         "id":"PB202102006",
//         "date":"22/11/2020 11:39:52",
//         "area":"Seremban",
//         "state":"Negeri Sembilan",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Pembaharuan",
//         "name":"Nurlina binti Alias",
//         "id":"PB202102007",
//         "date":"22/11/2020 11:39:52",
//         "area":"Seremban",
//         "state":"Negeri Sembilan",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Nora binti Arshad",
//         "id":"PR202102002",
//         "date":"23/12/2020 15:41:02",
//         "area":"Ipoh",
//         "state":"Perak",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Pembaharuan",
//         "name":"Aliya binti Harun",
//         "id":"PD202102002",
//         "date":"20/12/2020 18:21:13",
//         "area":"Ipoh",
//         "state":"Perak",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Mustafa bin Ali",
//         "id":"PB202102001",
//         "date":"15/02/2021 10:39:12",
//         "area":"Petaling Jaya",
//         "state":"Selangor",
//         "status":"Belum Disemak"
//     },
//     {
//         "type":"Permohonan Baharu",
//         "name":"Roslan bin Dahlan",
//         "id":"PB202102002",
//         "date":"06/01/2021 14:36:50",
//         "area":"Sungai Petani",
//         "state":"Kedah",
//         "status":"Belum Disemak"
//     }
// ]

}