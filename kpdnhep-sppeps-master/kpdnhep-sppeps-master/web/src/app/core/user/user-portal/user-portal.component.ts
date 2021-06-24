import { W3csService } from './../../../shared/services/w3cs/w3cs.service';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../../shared/services/services/service.service';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {

  constructor(private w3cService: W3csService,
    private services: ServicesService
    ) { 
    
    }

   // CSS class
   fontSize: string;
   fontColor: string;
   flag_1: boolean = false;
   flag_1Link: string = "";
   flag_2: boolean = false;
   flag_3: boolean = false;
   flag_4: boolean = false;

  ngOnInit(): void {
    //check
    this.services.doVerification("all").subscribe((res)=>{
      console.log(res.status);
      console.log(res.status.includes('1'));
      
      if (res.status.includes('1')){
        this.flag_1 = true;    
      }else{
        this.flag_1Link = "['/user/user-portal']";
      }
      res.status.includes('3') ? this.flag_3=true : this.flag_3=false;
      res.status.includes('4') ? this.flag_4=true : this.flag_4=false;
      res.status.includes('2') ? this.flag_2=true : this.flag_2=false;

    });

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );
  }

}
