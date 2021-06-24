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
export class PentadbirService {
  
  // Data
  public requests: any[] = [];

  constructor(private http: HttpClient) {}

    newPengumuman(ff): Observable<any> {
      let tempUrl = production.baseUrl + "api/postpengumuman";
      return this.http.post<any>(tempUrl, ff).pipe(tap((res) => {}));
    }

    newSoalanLazim(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/postfaq";
        return this.http.post<any>(tempUrl, ff).pipe(tap((res) => {}));
    }

    getSoalanLazim(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllFaq";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getActiveSoalanLazim(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllActiveFaq";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    newFaqKategori(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/postfaqkategori";
        return this.http.post<any>(tempUrl, ff).pipe(tap((res) => {}));
    }

    getAllActiveKategori(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getallactivekategori";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    postpermohonanA(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/postpermohonanA";
        return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    savePermohonanA(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/savepermohonanA";
        return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    postpermohonanB(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/postpermohonanB";
        return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    postpermohonanC(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/postpermohonanB";
        return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

    postpermohonanD(ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/postpermohonanB";
        return this.http.post<File[]>(tempUrl, {}).pipe(tap((res) => {}));
    }
    
    getAllPermohonan(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllPermohonan";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllPPN(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllPPN";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllActivePPN(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllActivePPN";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllCompletedPPN(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllCompletedPPN";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllActivePHQ(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllActivePHQ";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllCompletedPHQ(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllCompletedPHQ";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllActivePPY(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllActivePPY";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllCompletedPPY(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllCompletedPPY";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllActivePPL(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllActivePPL";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllCompletedPPL(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllCompletedPPL";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllActivePDRM(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllActivePDRM";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllCompletedPDRM(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllCompletedPDRM";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getAllSenaraiHitam(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getAllSenaraiHitam";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    // updatePPN(ff): Observable<any> {
    //     let tempUrl = production.baseUrl + "api/updatePPN";
    //     return this.http.post<any>(tempUrl, ff).pipe(tap((res) => {}));
    // }

    getPermohonanA(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getPermohonanA";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getPermohonanB(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getPermohonanB";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getPermohonanC(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getPermohonanC";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    getPermohonanD(): Observable<any> {
        let tempUrl = production.baseUrl + "api/getPermohonanD";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    retrieveFAQ(): Observable<any> {
        let tempUrl = production.baseUrl + "api/retrieveFAQ";
        return this.http.get<any>(tempUrl, {}).pipe(tap((res) => {}));
    }

    editPPN(id): Observable<any> {
        let tempUrl = production.baseUrl + "api/editPPN/" + id;
        return this.http.post<File[]>(tempUrl,{}).pipe(tap((res) => {}));
    }

    editPHQ(id): Observable<any> {
        let tempUrl = production.baseUrl + "api/editPHQ/" + id;
        return this.http.post<File[]>(tempUrl,{}).pipe(tap((res) => {}));
    }

    editPDRM(id): Observable<any> {
        let tempUrl = production.baseUrl + "api/editPDRM/" + id;
        return this.http.post<File[]>(tempUrl,{}).pipe(tap((res) => {}));
    }
    
    updatePPN(id, ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/updatePPN/" + id;
        return this.http.post<File[]>(tempUrl,ff).pipe(tap((res) => {}));
    }

    editPPY(id): Observable<any> {
        let tempUrl = production.baseUrl + "api/editPPY/" + id;
        return this.http.post<File[]>(tempUrl,{}).pipe(tap((res) => {}));
    }

    updatePHQ(id, ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/updatePHQ/" + id;
        return this.http.post<File[]>(tempUrl,ff).pipe(tap((res) => {}));
    }

    updatePDRM(id, ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/updatePDRM/" + id;
        return this.http.post<File[]>(tempUrl,ff).pipe(tap((res) => {}));
    }

    updatePPY(id, ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/updatePPY/" + id;
        return this.http.post<File[]>(tempUrl,ff).pipe(tap((res) => {}));
    }

    updatePPL(id, ff): Observable<any> {
        let tempUrl = production.baseUrl + "api/updatePPL/" + id;
        return this.http.post<File[]>(tempUrl,ff).pipe(tap((res) => {}));
    }

    editPPL(id): Observable<any> {
        let tempUrl = production.baseUrl + "api/editPPL/" + id;
        return this.http.post<File[]>(tempUrl,{}).pipe(tap((res) => {}));
    }

    permohonan: any;
    editPermohonan(id): Observable<any> {
        let tempUrl = production.baseUrl + "api/editPermohonan/" + id;
        return this.http.get<any>(tempUrl,{}).pipe(tap((res) => {
            this.permohonan = res[0];
        }));
    }



    // saveApplication(ff: FormData): Observable<any> {
    //   let tempUrl = production.baseUrl + "api/saveApplication";
    //   return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    // }

    // doVerification(flag): Observable<any> {
    //   let tempUrl = production.baseUrl + "api/doVerification";
    //   return this.http.post<any>(tempUrl, {'user_filter':flag}).pipe(tap((res) =>{}));
    // }

    // retrieveStatus(): Observable<any> {
    //   let tempUrl = production.baseUrl + "api/retrieveStatus";
    //   return this.http.get<any>(tempUrl, {}).pipe(tap((res) =>{}));
    // }

    // getExtraInfo(p_type): Observable<any> {
    //   let tempUrl = production.baseUrl + "api/getExtraInfo?p_type=" + p_type;
    //   return this.http.get<any>(tempUrl,{}).pipe(tap((res) =>{}));
    // }
       
}
