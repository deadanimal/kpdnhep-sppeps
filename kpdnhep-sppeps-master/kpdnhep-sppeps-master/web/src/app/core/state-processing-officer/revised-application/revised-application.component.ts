import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-revised-application',
  templateUrl: './revised-application.component.html',
  styleUrls: ['./revised-application.component.scss']
})
export class RevisedApplicationComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

  
}
