import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  approveOfficerRoutes,
  ROUTESUSER,
  adminHqRoutes,
  supportingOfficerRoutes,
  agencyPdrmRoutes,
  hqProcessingOfficerRoutes,
  stateProcessingOfficerRoutes,
  infoManagementAdminRoutes,
  GlobalOfficerRoutes
} from '../../shared/menu/menu-items';
import { AuthService } from 'src/app/shared/auth/auth.service';

var misc: any = {
  sidebar_mini_active: true
};

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {


  public menuItems: any[];
  public isCollapsed = true;
  public menu;
  public userDetail: any;
  imgLogo = 'assets/img/logo/jata-negara.png'
  // imgLogo: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUserDetail().subscribe(
      (res) => {
        this.userDetail = res;

        if (this.userDetail.kod_peranan.includes("PEL")) {
          this.menu = approveOfficerRoutes.slice();
        }
        if (this.userDetail.kod_peranan.includes("PYK")) {
          this.menu.push(supportingOfficerRoutes[0]);
        }
        if (this.userDetail.kod_peranan.includes("MAKL")) {
          this.menu = adminHqRoutes.slice();
        }
        if (this.userDetail.kod_peranan.includes("PDRM")) {
          this.menu.push(agencyPdrmRoutes[0]);
        }
        if (this.userDetail.kod_peranan.includes("PHQ")) {
          this.menu.push(hqProcessingOfficerRoutes[0]);
        }
        if (this.userDetail.kod_peranan.includes("PN")) {
          this.menu.push(stateProcessingOfficerRoutes[0]);
        }
        if (this.userDetail.kod_peranan.includes("KPD")) {
          this.menu.push(infoManagementAdminRoutes[0]);
        }
        if ((this.userDetail.kod_peranan.includes("PN")) || (this.userDetail.kod_peranan.includes("PHQ"))){
          this.menu.push(GlobalOfficerRoutes[0]);
        }

        this.menuItems = this.menu.filter(menuItem => menuItem);
        console.log(this.menuItems);

        this.router.events.subscribe(event => {
          this.isCollapsed = true;
        });
      });

  }

  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }

  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }

  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
