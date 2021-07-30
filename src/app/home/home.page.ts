import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private device: Device) {
    console.log('Device UUID is: ' + this.device.uuid);
    console.log(`manufacturer: ${this.device.manufacturer}`);
    console.log(`model: ${this.device.model}`);
    console.log(`platform: ${this.device.platform}`);
    console.log(`version: ${this.device.version}`);
    console.log(`cordova: ${this.device.cordova}`);
    console.log(`serial: ${this.device.serial}`);
  }

}
