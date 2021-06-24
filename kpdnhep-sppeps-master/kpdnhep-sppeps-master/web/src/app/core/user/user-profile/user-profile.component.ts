import { W3csService } from './../../../shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicesService } from 'src/app/shared/services/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  //getInfo
  userdata: any;
  token: String;
  notelefonori: string;
  notelefonori2: string;
  dari_tahun: string;
  emelori: string;
  poskodori: string;
  alamat1ori: string;
  alamat2ori: string;
  negeriori: string;
  gambar;
  public ImgURL;
  images;
  pass1Error: number = 0;
  pass2Error: number = 0;
  pass2ErrorS: number = 0;

  password: any;
  passwordConfirm: any;


  constructor(
    private translate: TranslateService,
    private w3cService: W3csService,
    private authService: AuthService,
    private jwtService: JwtService,
    private sanitizer: DomSanitizer,
    private services: ServicesService,
    private router: Router
    ) { }


    // CSS class
  fontSize: string;
  fontColor: string;

  edit= false;

  editProfile(){
    this.edit = true;
  }

  batalEdit(){
    this.edit = false;
  }

  ngOnInit(): void {

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );

    this.token = this.jwtService.getToken('accessToken');
    this.authService.getUserDetail().subscribe((res) => {

      this.userdata = res;
      this.notelefonori = res.notelbimbit.substr(0, 3);
      this.notelefonori2 = res.notelbimbit.substr(3);
      this.emelori = res.emel;
      this.alamat1ori = res.alamat1;
      this.alamat2ori = res.alamat2;
      this.poskodori = res.poskod;
      this.negeriori = res.negeri;
      this.gambar = res.gambar

      this.ImgURL = res.gambar ;
      console.log(res);

      if (this.userdata.jantina === '1'){
        this.images = '../../../../avatar2.jpg';
        return this.images;
      } else {
        this.images = '../../../../avatar.jpg';
        return this.images;
      }
      // this.ImgURL.subscribe((blob : any) => {
      //       let objectURL = URL.createObjectURL(blob);       
      //       this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

      //     });


    })

  }

  fileToUpload: File = null;
  gambar_kp;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    document.getElementById("fileList").innerHTML = files[0].name;
    this.gambar_kp = files[0].name;
  }

  
  updateProfile(){
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
    ff.append("notelbimbit", this.notelefonori + this.notelefonori2);
    ff.append("alamat1", this.alamat1ori);
    ff.append("alamat2", this.alamat2ori)
    ff.append("poskod", this.poskodori)
    ff.append("negeri", this.negeriori)
    ff.append("password", pass1)
    ff.append("gambar_kp", this.fileToUpload)

    this.services.updateProfile(ff).subscribe((res) => {
      if (res.status == "success") {
        this.router.navigate(['user/user-portal']);
      }
    }), () => {

    }, () => {

    }
  }

  // download() {
  //   const mediaType = 'application/image';
  //   this.api.download(this.ImgURL).subscribe(value => {
  //     const blob = new Blob([value], { type: mediaType });
  //     const unsafeImg = URL.createObjectURL(blob);
  //     this.image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //   }, error1 => {

  // //   });
  // unsafeImageUrl;
//   getImageFromService() {

//         this.unsafeImageUrl = URL.createObjectURL(this.ImgURL);
//         this.image = this.sanitizer.bypassSecurityTrustUrl(this.unsafeImageUrl);

//         if(e.target.files.length !== 0){
//           this.setState({image: URL.createObjectURL(e.target.files[0])})
//         }
    
// }

  

}
