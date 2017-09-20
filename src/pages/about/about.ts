import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Dialogs } from '@ionic-native/dialogs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  codeData: any;

  constructor(
    public navCtrl: NavController,
    public vibration: Vibration,
    public dialogs: Dialogs,
    public barcodeScanner: BarcodeScanner
  ) {

  }

  btnScan() {
    console.log('scan click!');
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.dialogs.alert(barcodeData.text, 'BarcodeScanner', 'Ok');
      this.codeData = barcodeData.text;
    }, (err) => {
      // An error occurred
    });
  }

  btnAlert() {
    console.log("alert click!");
    this.dialogs.alert('Hello world', 'Title', 'Ok');
  }

  btnConfirm() {
    console.log("confirm click!");
    this.dialogs.confirm('Are you ok?', 'Title', ['No', 'Ok']);
  }

  btnVibrate() {
    console.log("vibrate click!");
    this.vibration.vibrate(1000);
  }

  btnBeep() {
    console.log("beep click!");
    this.dialogs.beep(1);
  }

}
