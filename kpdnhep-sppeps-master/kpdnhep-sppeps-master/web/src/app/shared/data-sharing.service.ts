import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class DataSharingService {

  itemValue = new BehaviorSubject(this.userType);
  
  set userType(signal) {
    this.itemValue.next(signal);
  }

  get userType() {
    return this.itemValue;
  }
}


