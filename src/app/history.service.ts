import { Injectable } from '@angular/core';
import { FormSubmit } from './formsubmit.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _fomSubmit: FormSubmit[] = [];
  constructor() {
  }

  public get formSubmit(): FormSubmit[] {
    return this._fomSubmit.concat([]);
  }


  public append(formSubmit: FormSubmit) {
    this._fomSubmit.push(formSubmit);
  }
}


