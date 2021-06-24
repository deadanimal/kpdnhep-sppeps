import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Form, FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { production } from "src/environments/production";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  
  // URL
  public botmanCategoryUrl: string = production.baseUrl + "api/botcategory/";
  public liveChatUrl: string = production.baseUrl + "api/livechat/";
  public reportUrl: string = production.baseUrl + "api/giveReport";

  // Data
  public requests: any[] = [];

  constructor(private http: HttpClient) {}

  checkMyKad(mykad): Observable<any>{
      let tempUrl = production.baseUrl + "api/checkMyKad";
      return this.http.post<any[]>(tempUrl,{'myKadId': mykad}).pipe(tap((res) => {}));
  }

  checkUrlVarss(no_kp,kod): Observable<any>{
    let tempUrl = production.baseUrl + "api/checkUrlVars";
    return this.http.post<any[]>(tempUrl,{'no_kp': no_kp,'kod': kod}).pipe(tap((res) => {}));
  }

  savePre(email,no_kp,password): Observable<any>{
    let tempUrl = production.baseUrl + "api/savePre";
    return this.http.post<any[]>(tempUrl,{'email': email,'no_kp': no_kp,"password": password}).pipe(tap((res) => {}));
  }

  // registerFull(body: any): Observable<any> {
  //   let tempUrl = production.baseUrl + "api/registerFull";
  //   return this.http.post<any[]>(tempUrl, body.value).pipe(tap((res) => {}));
  // }

  // registerFull(file1,jantina,koddaftar,alamat1,alamat2,poskod,negeri,no_telefon1,no_telefon2,fileToUpload2): Observable<any> {
   
  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({
  //   //     'Content-Type':  'multipart/form-data',
  //   //   })
  //   // };
    
  //   //let options = new RequestOptions({ headers: headers });
  //   let ff = new FormData();
  //   ff.append("file1",file1);
  //   ff.append("jantina",jantina);
  //   ff.append("koddaftar",koddaftar);
  //   ff.append("alamat1",alamat1);
  //   ff.append("alamat2",alamat2);
  //   ff.append("poskod",poskod);
  //   ff.append("negeri",negeri);
  //   ff.append("no_telefon1",no_telefon1);
  //   ff.append("no_telefon2",no_telefon2);
  //   // ff.append("cawangan_kp",cawangan_kp);
  //   ff.append("file2",fileToUpload2);

  //     let tempUrl = production.baseUrl + "api/registerFull";
  //     return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
  //   }

  registerFull(file1,jantina,koddaftar,alamat1,alamat2,poskod,negeri,no_telefon1,no_telefon2,fileToUpload2, umur): Observable<any> {
   
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'multipart/form-data',
    //   })
    // };
    
    //let options = new RequestOptions({ headers: headers });
    let ff = new FormData();
    ff.append("file1",file1);
    ff.append("jantina",jantina);
    ff.append("koddaftar",koddaftar);
    ff.append("alamat1",alamat1);
    ff.append("alamat2",alamat2);
    ff.append("poskod",poskod);
    ff.append("negeri",negeri);
    ff.append("no_telefon1",no_telefon1);
    ff.append("no_telefon2",no_telefon2);
    ff.append("umur",umur);
    // ff.append("cawangan_kp",cawangan_kp);
    ff.append("file2",fileToUpload2);

      let tempUrl = production.baseUrl + "api/registerFull";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    newApplication(ff): Observable<any> {
      let tempUrl = production.baseUrl + "api/postpermohonanA";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    saveApplication(ff: FormData): Observable<any> {
      let tempUrl = production.baseUrl + "api/saveApplication";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    saveApplicationR(ff: FormData): Observable<any> {
      let tempUrl = production.baseUrl + "api/postpermohonanB";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    saveApplicationD(ff: FormData): Observable<any> {
      let tempUrl = production.baseUrl + "api/postpermohonanC";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    saveApplicationA(ff: FormData): Observable<any> {
      let tempUrl = production.baseUrl + "api/postpermohonanD";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    doVerification(flag): Observable<any> {
      let tempUrl = production.baseUrl + "api/doVerification";
      return this.http.post<any>(tempUrl, {'user_filter':flag}).pipe(tap((res) =>{}));
    }

    retrieveStatus(): Observable<any> {
      let tempUrl = production.baseUrl + "api/retrieveStatus";
      return this.http.get<any>(tempUrl, {}).pipe(tap((res) =>{}));
    }

    getExtraInfo(p_type): Observable<any> {
      let tempUrl = production.baseUrl + "api/getExtraInfo?p_type=" + p_type;
      return this.http.get<any>(tempUrl,{}).pipe(tap((res) =>{}));
    }

    updateProfile(ff: FormData): Observable<any> {
      let tempUrl = production.baseUrl + "api/updateProfile";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    checkPermit(): Observable<any> {
      let tempUrl = production.baseUrl + "api/checkPermit";
      return this.http.get<any>(tempUrl,{}).pipe(tap((res) =>{}));
    }
       
}
