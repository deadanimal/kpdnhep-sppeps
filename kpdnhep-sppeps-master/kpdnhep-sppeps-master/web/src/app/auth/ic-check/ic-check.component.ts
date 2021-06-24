import { W3csService } from './../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ServicesService } from './../../shared/services/services/service.service';

@Component({
  selector: 'app-ic-check',
  templateUrl: './ic-check.component.html',
  styleUrls: ['./ic-check.component.scss']
})
export class IcCheckComponent implements OnInit {

  protected aFormGroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private translate: TranslateService,
    private w3cService: W3csService,
    private servicesService : ServicesService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }


  // CSS class
  fontSize: string;
  fontColor: string;
  originalCode: string;

  //other class
  captchaError: number = 0;
  icError: number = 0;
  icpassed: number = 0;
  passedIC: number = 0;
  emailError: number = 0;
  pass1Error: number = 0;
  pass2Error: number = 0;
  pass2ErrorS: number = 0;

  email: any;
  password: any;
  passwordConfirm: any;

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );

    this.generateCaptcha();
    
    
  }

  // signin = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   password: new FormControl(null, Validators.required),
  //   captcha: new FormControl(),
  // });

  modalRef: BsModalRef;

  generateCaptcha(){
    var c = <HTMLCanvasElement> document.getElementById("thekepcha");
    let temp = "";
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 200, 50);
    const agent = window.navigator.userAgent.toLowerCase();

    if (agent.indexOf('safari') > -1){
      ctx.font = "bold 30px Times New Roman";
    }else{
      ctx.font = "bold 30px Fantasy";
    }
   
    ctx.fillStyle = "#858181";
    this.originalCode = "";
    temp = this.generateRandomStr(1);
    this.originalCode = this.originalCode + temp;
    ctx.fillText(temp,45,45);
    temp = this.generateRandomStr(1);
    this.originalCode = this.originalCode + temp;
    ctx.fillText(temp,65,43);
    temp = this.generateRandomStr(1);
    this.originalCode = this.originalCode + temp;
    ctx.fillText(temp,85,38);
    temp = this.generateRandomStr(1);
    this.originalCode = this.originalCode + temp;
    ctx.fillText(temp,105,42);
    temp = this.generateRandomStr(1);
    this.originalCode = this.originalCode + temp;
    ctx.fillText(temp,125,45);
    temp = this.generateRandomStr(1);
    this.originalCode = this.originalCode + temp;
    ctx.fillText(temp,145,45);    
  }

  onSubmit(template: TemplateRef<any>, template1: TemplateRef<any>) {
    var ic = (<HTMLInputElement>document.getElementById('ic')).value;
    var captcha = (<HTMLInputElement>document.getElementById('captchaAns')).value;
    (<HTMLInputElement>document.getElementById('captchaAns')).value = "";
    var n = ic.length;

    if (ic.trim() != "" && ic.length > 11 && ic.length < 13 && isNaN(ic as any) !== true){ 
     
      this.icError = 0;
        if (this.originalCode != captcha.toUpperCase()){
          if (captcha.trim() != ""){
            this.captchaError = 1;
            this.generateCaptcha();
          } 
        }else{
          this.spinner.show();  
          this.captchaError = 0;
          this.generateCaptcha();

          var age = parseInt(ic.substring(0, 2));
          let currYr = new Date().getFullYear().toString().substr(-2);
          var age = parseInt(currYr)-age;

              this.servicesService.checkMyKad(ic).subscribe(
                (res) => {
                    if (res.status == "success"){
                      this.passedIC = parseInt(ic);

                      if (age >= 21 || age < 0) {
                        this.spinner.hide();
                        this.icpassed = 1;
                      }else if (age < 21) {
                        this.spinner.hide();
                        this.modalRef = this.modalService.show(template1);
                      }
                    }else if (res.status == "backtologin"){
                      this.spinner.hide();
                      return this.router.navigate(["/auth/login"])
                    }else{ 
                      this.spinner.hide();
                      return this.router.navigate(["/auth/register2"],{ queryParams: { no_kp: parseInt(ic), kod: res.code_daftar} });
                    }
                  
                  //this.closeModal()
                  //this.loadingBar.complete()
                },
                () => {
                  this.spinner.hide();
                  this.modalRef = this.modalService.show(template);
                  //this.notifySuccess("Successfully Created")
                  //this.loadingBar.complete()
                },
                () => {

                }
              )
        }
      }else{
        this.icError = 1;
      }
 
  }

  onSubmit2(){
    var email = (<HTMLInputElement>document.getElementById('emailfirst')).value;
    var pass1 = (<HTMLInputElement>document.getElementById('password1')).value;
    var passconf = (<HTMLInputElement>document.getElementById('password2')).value;

    if (email.trim() != ""){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
          this.emailError = 0;
        }else{
          this.emailError = 1;
        }
    }
    else{
        this.emailError = 1;
    }

    if (pass1.trim() != ""){
        this.pass1Error = 0;
    }
    else{
      this.pass1Error = 1;
    }

    if (passconf.trim() != ""){
      this.pass2Error = 0;
    }
    else{
      this.pass2Error = 1;
    }

    if (this.pass1Error == 0 && this.pass2Error == 0){
        if (pass1 != passconf){
           this.pass2ErrorS = 1;
        }
        else{
          this.pass2ErrorS = 0;
        }
    }

    if (this.pass1Error == 0 && this.pass2Error == 0 && this.pass2ErrorS == 0 && this.emailError == 0){
      this.spinner.show();
      //save in db and route
        this.servicesService.savePre(email,this.passedIC,pass1).subscribe(
          (res) => {
            if (res.status == "success"){
              this.spinner.hide();
              return this.router.navigate(["/auth/register2"],{ queryParams: { no_kp: this.passedIC, kod: res.code} });
            }else{
              this.spinner.hide();
            }
            //this.closeModal()
            //this.loadingBar.complete()
          },
          () => {
            this.spinner.hide();
            //this.notifySuccess("Successfully Created")
            //this.loadingBar.complete()
          },
          () => {
            this.spinner.hide();
          }
        )
    }
    

  }

  showDaftar(){
    this.icpassed = 1;
  }

  generateRandomStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


}
