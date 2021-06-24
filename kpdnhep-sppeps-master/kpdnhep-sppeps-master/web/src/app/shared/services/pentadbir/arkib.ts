import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Form, FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { development } from "src/environments/development";

@Injectable({
  providedIn: "root",
})
export class ServicesArkib {
  
  // Data
  public requests: any[] = [];

  constructor(private http: HttpClient) {}


    postArkib(ff): Observable<any> {
      let tempUrl = development.baseUrl + "api/arkib";
      return this.http.post<File[]>(tempUrl, ff).pipe(tap((res) => {}));
    }

       
}
