import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private extras: any;
  private extrasOrdenados = new BehaviorSubject<any>([]);
  extrasOrdenados$ = this.extrasOrdenados.asObservable();
  constructor() { }
  addCart(extra: any) {
    this.extras = [...this.extras, extra];
    this.extrasOrdenados.next(this.extras);
    console.log(this.extras)
  }
}
