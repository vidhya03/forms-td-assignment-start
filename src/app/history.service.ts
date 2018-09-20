import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _fomSubmit: FormSubmit[] = [];
  constructor() {
  }

  public get formSubmit(): FormSubmit[] {
    return this._fomSubmit;
  }

 public set formSubmit(formSubmit: FormSubmit[]) {
    this._fomSubmit.concat(formSubmit);
  }
  public append(formSubmit: FormSubmit) {
    this._fomSubmit.push(formSubmit);
  }
}

class FormSubmit {
  constructor(
    public email: string,
    public subscriptions: string,
    public password: string
  ) {}
}
