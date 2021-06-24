
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  // constructor(private modalService: BsModalService, private router:Router) { }

  // ngOnInit(): void {
  // }

  // modalRef: BsModalRef;

  
  // route: Router;

  // modal(template: TemplateRef<any>){
  //   // event.preventDefault();

  //   var id = (<HTMLInputElement>document.getElementById('email')).value;
  //   console.log("email", id);
  //   this.modalRef = this.modalService.show(template);
  //   // this.router.navigate(['core/user/new-password'])

  // }

  changePasswordForm: FormGroup;
  errors = null;

  constructor(
    public fb: FormBuilder,
    route: ActivatedRoute,
    public authService: AuthService,
  ) {
    this.changePasswordForm = this.fb.group({
      email: [''],
      password: ['admin123'],
      password_confirmation: ['admin123'],
      passwordToken: ['']
    })
    route.queryParams.subscribe((params) => {
      this.changePasswordForm.controls['passwordToken'].setValue(params['token']);
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.authService.resetPassword(this.changePasswordForm.value).subscribe(
      result => {
        alert('Password has been updated');
        this.changePasswordForm.reset();
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }



}
