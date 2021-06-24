import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';
import { ServicesService } from './../../../shared/services/services/service.service';


@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.scss']
})
export class ApplicationStatusComponent implements OnInit {

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;

  get = [];

  route: Router;
  userdata: any
  // CSS class
  fontSize: string;
  fontColor: string;
  token: String;

  //variable
  formCheck: boolean = true;

  //form Variables
  notelefonori: string;
  notelefonori2: string;
  emelori: string;
  poskodori: string;
  alamat1ori: string;
  alamat2ori: string;
  negeriori: string;
  pk_sek: string = "";
  tahap_pen: string = " ";
  lesen;
  skop_tugas: string = "";
  pp_eps: string = "";
  agreeTick: boolean = false;
  nama_faillesen: string = "";
  bank_or_sewa;
  status_id;

  //panel
  panel_bank: string = "";
  left_bank_num: string = "";
  right_bank_num: string = "";
  panel_name: string = "";
  icNumber1: string = "";
  icNumber2: string = "";
  icNumber3: string = "";
  no_permit: string = "";
  no_telPanel: string = "";
  fileToUpload: File = null;
  name;
  umur;
  no_kp;
  test;
  id;

  constructor(private modalService: BsModalService, private ServicesService: ServicesService, private pentadbir: PentadbirService, private router: Router, private routes: ActivatedRoute) {
   
    this.ServicesService.retrieveStatus().subscribe(res=>{
     this.rows = res;
      this.test = res.jenis_permohonan;
     console.log('get', this.rows);
   })

  }


  temp = [];
  // rows = [];
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;


   //table
   tableEntries: number = 5;
   // tableSelected: any[] = [];
   // tableTemp = [];
   tableActiveRow: any;
   // SelectionType = SelectionType;
 
   onActivate(event) {
     this.tableActiveRow = event.row;
   }
 
   entriesChange($event) {
     this.tableEntries = $event.target.value;
   }

   //end datatable


  ngOnInit(): void {
    this.id = this.routes.snapshot.params.id;
  }

  // shiw/hide status permohonan
  public showStatus: boolean = false;
  public showTable:boolean = true;

  showstatus(){
    this.showStatus = true
    this.showTable = false
  }

  back(){
    this.showStatus = false
    this.showTable = true
  }

  formDataA;
  formDataB;
  formDataC;
  formDataD;

  editForm(template){

    if (this.test.jenis_permohonan == 'Permohonan Baharu'){
      this.pentadbir.getPermohonanA().subscribe(res=>{
        this.formDataA = res
        console.log(res)
      })

    } else if (this.test.jenis_permohonan == 'Permohonan Pembaharuan'){
      this.pentadbir.getPermohonanB().subscribe(res=>{
        this.formDataB = res
        console.log(res)
      })

    } else if (this.test.jenis_permohonan == 'Permohonan Pendua'){
      this.pentadbir.getPermohonanD().subscribe(res=>{
        this.formDataC = res
        console.log(res)
      })
    } else if (this.test.jenis_permohonan == 'Permohonan Rayuan'){
      this.pentadbir.getPermohonanD().subscribe(res=>{
        this.formDataD = res
        console.log(res)
    })
  }
  }
  
  choose(){
    this.pentadbir.editPermohonan(this.id).subscribe((res) =>{      
      console.log(res)
    })
    
  }

}
