import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  checkinCounter = 0;
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.match('/api/v1/trustlist')
        && request.url.match('/api/v1/trustlist').length > 0
        && request.method === 'GET') {
          request = request.clone({
            url: '../../assets/trustlist.json'
          });
    }
    return next.handle(request);
  }
}
