import { Component, OnInit } from '@angular/core';
import { W3csService } from '../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";
import { AuthService } from '../../../shared/auth/auth.service';
import { JwtService } from '../../../shared/handler/jwt/jwt.service';
import { ServicesService } from '../../../shared/services/services/service.service';
import { PentadbirService } from 'src/app/shared/services/pentadbir/pentadbir.service';

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

@Component({
  selector: 'app-editapplication',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.scss']
})


export class EditApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService,
    private services: ServicesService,
    private pentadbir: PentadbirService
  ) { }

    ngOnInit(){

    }
}


