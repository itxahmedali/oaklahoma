import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  public static webUrl: Subject<any> = new Subject<any>();
}
