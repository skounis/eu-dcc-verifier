import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public settingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastController: ToastController,
              private localStorage: LocalStorageService) { }

  ngOnInit() {
    const sampleKeytSetting = this.localStorage.getItem(LocalStorageService.ENVIRONMENT_KEY);
    this.settingsForm = this.formBuilder.group({
      sampleToggle: [sampleKeytSetting == null ? true : sampleKeytSetting]
    });
  }

  get settings() {
    return this.settingsForm.controls;
  }

  save() {
    this.localStorage.setItem(LocalStorageService.ENVIRONMENT_KEY, this.settingsForm.value.environmentSelect);
    this.localStorage.setItem(LocalStorageService.SAMPLE_KEY, this.settingsForm.value.sampleToggle);
    this.displayToast('Settings saved!', 'success');
  }

  private displayToast(message: string, statusColor: string) {
    // Close multiple toasts
    try {
      this.toastController.dismiss().then(() => {
      }).catch(() => {
      }).finally(() => {
        console.log('Toast closed')
      });
    } catch(e) {}

    this.toastController.create({
      cssClass: 'be-toast-settings',
      message: message,
      color: statusColor,
      position: 'bottom',
      duration: 1000,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }

}
