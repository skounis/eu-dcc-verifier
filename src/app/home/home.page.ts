import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { decode_hcert, verify_hcert } from 'eu-dcc-lib';
import trustlist from '../../assets/trustlist.json';

import { Store } from '../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  scannerEnabled = false;
  ignoreScan = false;
  audio = new Audio('assets/beep.mp3');
  
  verified: boolean = false;
  dcc: any = {};

  constructor(private toastController: ToastController,
    private store: Store) {
  }

  ionViewWillEnter() { }

  startScan() {
    this.dcc = {};
    if (this.store.forcedHCert) {
      this.onScanSuccess(this.store.forcedHCert);
      return;
    }
    this.scannerEnabled = true;
  }

  cancelScan() {
    this.scannerEnabled = false;
    this.ignoreScan = false;
  }

  onScanSuccess(scanResult: string) {
    if (this.ignoreScan) {
      console.log('Ignoring', scanResult);
      return;
    }
    this.ignoreScan = true;
    setTimeout(() => {
      this.ignoreScan = false;
    }, 5000);
    this.audio.play();

    this.dcc = decode_hcert(scanResult);
    const pem = this.getPem(this.dcc);

    try {
      const verify = verify_hcert(scanResult, pem);
      verify.then((buf: any) => {
        this.verified = true;
      }).catch((error: any) => {
        console.error(error);
        this.verified = false;
      });
    } catch (error: any) {
      console.log(error)
      this.verified = false;
    }
    this.cancelScan()
  }

  onCameraNotFound(e: Event) {
    console.log('onCameraNotFound:', e);
  }

  onCameraFound(e: Event) {
    console.log('onCameraFound', e);
  }

  private displayToast(message: string, statusColor: string, attendee?: any, alreadyCheckedIn?: boolean) {
    // Close multiple toasts
    try {
      this.toastController.dismiss().then(() => {
      }).catch(() => {
      }).finally(() => {
        console.log('Toast closed')
      });
    } catch (e) { }

    let buttons = [
      {
        text: 'Ok',
        handler: () => {
        }
      }
    ];

    this.toastController.create({
      cssClass: 'be-toast-home',
      message: message,
      color: statusColor,
      position: 'top',
      buttons: buttons
    }).then((toast) => {
      toast.present();
    });
  }

  /**
   * Check if an object is empty e.g. `{}`
   * @param obj The object to check
   * @returns boolean
   */
  isEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }

  /**
   * Resolve the PEM for a given DCC based on it's kid
   * @param dcc 
   * @returns a PEM as string
   */
  private getPem(dcc:any): string {
    const kid = dcc.metadata.kid;
    const certificate = trustlist.certificates.filter(e => {
      return e.kid == kid;
    })

    if (certificate.length > 0) {
      return this.pack(certificate[0].rawData);
    } else {
      return 'No Certificate found.'
    }
  }

  private pack(pem) {
    return `-----BEGIN CERTIFICATE-----\n${pem}\n-----END CERTIFICATE-----`;
  }
}
