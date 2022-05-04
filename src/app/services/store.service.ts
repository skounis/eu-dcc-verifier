import { Injectable } from '@angular/core';

@Injectable()
export class Store {

  private _forcedHCert: string;

  constructor() { }

  get forcedHCert(): string {
    this._forcedHCert = this._forcedHCert || '';
    return this._forcedHCert;
  }

  set forcedHCert(value: string) {
    if (value) {
      this._forcedHCert = value;
    }
  }
}
