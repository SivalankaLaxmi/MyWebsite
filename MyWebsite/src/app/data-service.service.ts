import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private show = false;

  getShow() {
    return this.show;
  }

  setShow(show: any) {
    this.show = show;
  }
}
