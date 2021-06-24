import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ServicesService } from 'src/app/shared/services/services/service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  
  userdata: any;
  token: String;
  negeriori: string;
  emel: string;
  password: any;
  passwordConfirm: any;
  pass1Error: number = 0;
  pass2Error: number = 0;
  pass2ErrorS: number = 0;

  constructor(
    private modalService: BsModalService,
    private services: ServicesService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.getUserDetail().subscribe((res) => {
      this.userdata = res;

    });
  }

  modalRef: BsModalRef;

  update(template) {
    var pass1 = (<HTMLInputElement>document.getElementById('password1')).value;
    var passconf = (<HTMLInputElement>document.getElementById('password2')).value;

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

    let ff = new FormData();
    ff.append("password", pass1)

    this.services.updateProfile(ff).subscribe((res) => {
      if (res.status == "success") {
            
        this.modalRef = this.modalService.show(template,
          // {
          //   ignoreBackdropClick: true,
          //   keyboard: true,
          //   backdrop: true
          // }
          );
      }
    }), () => {

    }, () => {

    }
  }

  closeModal(){
    this.modalRef.hide()
  }

}
