import { Component, OnInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ServicesService } from 'src/app/shared/services/services/service.service';

@Component({
  selector: 'app-eps-status-check',
  templateUrl: './eps-status-check.component.html',
  styleUrls: ['./eps-status-check.component.scss']
})
export class EpsStatusCheckComponent implements OnInit {

  constructor(private services: ServicesService) { }

  ngOnInit(): void {
  }

  editing = {};
  rows = [];
  ColumnMode = ColumnMode;
  userdata;

  public show: boolean=false;
  public search: boolean=true;
  //toggle
  toggle(){
    this.show = !this.show;
    this.search = !this.search;
  }
  toggleSearch(){
    this.search = !this.search;
  }

  semakEPS(){
    this.services.checkPermit().subscribe((res) => {
      this.userdata = res;
      console.log(this.userdata)
    })
  }

}
