import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public vibration: Vibration
  ) {

  }

  btnAlert() {
    console.log("alert click!");
  }

  btnConfirm() {
    console.log("confirm click!");
  }

  btnVibrate() {
    console.log("vibrate click!");
    this.vibration.vibrate(1000);
  }

  btnBeep() {
    console.log("beep click!");
  }

}
