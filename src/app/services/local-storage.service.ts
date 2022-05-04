import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  static HCERT_KEY = 'hcert';
  static SAMPLE_KEY = 'sampleKey'
  static ENVIRONMENT_KEY = 'environmentKey'
  
  constructor() { }

  getItem(key): any {
    return localStorage.getItem(key);
    // const json = localStorage.getItem(key);
    // return json ? JSON.parse(json) : null;
  }

  setItem(key, value): void {
    localStorage.setItem(key, value);
    // localStorage.setItem(key, JSON.stringify(value));
  }
}
