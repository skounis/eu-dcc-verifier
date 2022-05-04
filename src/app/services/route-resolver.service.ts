import { Injectable } from '@angular/core';

import { Store } from './store.service';

@Injectable()
export class RouteResolverService {

  constructor(private store: Store) {
  }

  load(): Promise<any> {
    const url = new URL(window.location.href);
    this.store.forcedHCert = url.searchParams.get('hcert');
    return Promise.resolve();
  }
}
