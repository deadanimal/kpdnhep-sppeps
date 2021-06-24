import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  constructor(private modalService: BsModalService, private router:Router) { }

  ngOnInit(): void {
  }

  modalRef: BsModalRef;

  
  route: Router;

  modal(template: TemplateRef<any>){
    // event.preventDefault();
    // var id = (<HTMLInputElement>document.getElementById('email')).value;
    // console.log("email", id);
    this.modalRef = this.modalService.show(template);
    // this.router.navigate(['core/user/new-password'])

  }



}