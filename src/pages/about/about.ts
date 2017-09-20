import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public vibration: Vibration,
    public dialogs: Dialogs
  ) {

  }

  btnAlert() {
    console.log("alert click!");
    this.dialogs.alert('Hello world','title','Ok');
  }

  btnConfirm() {
    console.log("confirm click!");
    this.dialogs.confirm('your ok?','title',['Cancel','Ok']);
  }

  btnVibrate() {
    console.log("vibrate click!");
    this.vibration.vibrate(1000);
  }

  btnBeep() {
    console.log("beep click!");
    this.dialogs.beep(300);
  }

}
