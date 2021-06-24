import { W3csService } from 'src/app/shared/services/w3cs/w3cs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ServicesService } from './../../shared/services/services/service.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  
  // CSS class
  fontSize: string;
  fontColor: string;

  //others
  no_kp: string;
  code: number;
  email: any;
  jantina: any;
  jantinaError: number = 0;
  alamat2: string;
  alamat1: string;
  alamat1Error: number = 0;
  poskod: number;
  poskodError: number = 0;
  negeri: any;
  negeriError: number = 0;
  no_telefon1: number;
  no_telefon2: number;
  telefonError: number = 0;
  umur;
  // cawangan_kp: any;
  // cawanganError: number = 0;
  fileToUpload: File = null;
  fileToUpload2: File = null;
  fileToUploadError: number = 0; 
  fileToUpload2Error: number = 0;

  ngOnInit(): void {
    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );
  
  }

  constructor(
    private modalService: BsModalService, 
    private w3cService: W3csService,
    private servicesService : ServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService

    ) { 
      this.activatedRoute.queryParams.subscribe(
        (path: any) => {
          this.no_kp = path['no_kp'];
          this.code = path['kod'];
          this.servicesService.checkUrlVarss(this.no_kp,this.code).subscribe(
            (res) => {
               if (res.status == "failed"){
                return this.router.navigate(["/auth/ic-check"]);
               }else{
                 this.email = res.info[0].emel;
               }
            },
            () =>{

            },()=>{

            }
          );
        }
      )
    }

  modalRef: BsModalRef;

  onSubmit(template: TemplateRef<any>) {
    // if (ic.trim() != "" && ic.length > 11 && ic.length < 13 && isNaN(ic as any) !== true){ 

    // }
    
    if (this.jantina === undefined){
       this.jantinaError = 1;
    }else{
      this.jantinaError = 0;
    }

    if (this.alamat1 === undefined || this.alamat1.trim() == ""){ 
      this.alamat1Error = 1;
    }else{
      this.alamat1Error = 0;
    }

    if (this.poskod == undefined || isNaN(this.poskod as any) === true){ 
      this.poskodError = 1;
    }else{
      this.poskodError = 0;
    }
    
    if (this.negeri == undefined){
      this.negeriError = 1;
    }else{
      this.negeriError = 0;
    }

    if (isNaN(this.no_telefon1 as any) === true || this.no_telefon1 == 0 || isNaN(this.no_telefon2 as any) === true || this.no_telefon2 == 0 ){
        this.telefonError = 1;
    }else{
      this.telefonError = 0;
    }

    // if (this.cawangan_kp === undefined){ 
    //   this.cawanganError = 1;
    // }else{
    //   this.cawanganError = 0;
    // }

    if (this.fileToUpload === null){
       this.fileToUploadError = 1;
    }else{
      this.fileToUploadError = 0;
    }

   if (this.fileToUpload2 === null){
      this.fileToUpload2Error = 1;
   }else{
     this.fileToUpload2Error = 0;
   }

   var age = parseInt(this.no_kp.substring(0, 2));

    let currYr = new Date().getFullYear().toString().substr(-2);
    this.umur = parseInt(currYr) - age;

    if (this.umur < 0) {
      let j = (2000 + this.umur) - 1900;
      this.umur = j;
    }
 
   if (this.jantinaError != 1 && this.alamat1Error != 1 && this.poskodError != 1 && this.negeriError != 1 && this.telefonError != 1 && this.fileToUploadError != 1 && this.fileToUpload2Error != 1){
   
    this.spinner.show();
      this.servicesService.registerFull(this.fileToUpload,this.jantina,this.code,this.alamat1,this.alamat2,this.poskod,this.negeri,this.no_telefon1,this.no_telefon2,this.fileToUpload2, this.umur).subscribe((res)=>{
          if (res.status == "success"){

            this.modalRef = this.modalService.show(template);
            console.log(res)
          }
          this.spinner.hide();
        },(error)=>{
          console.log('error', error);
          console.log('data', this.fileToUpload,this.jantina,this.code,this.alamat1,this.alamat2,this.poskod,this.negeri,this.no_telefon1,this.no_telefon2,this.fileToUpload2,this.umur);
        },()=>{

        }

        )
    }
    //
    


  }
  
  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
  }
  handleFileInput2(files: FileList){
    this.fileToUpload2 = files.item(0);
  }
}
