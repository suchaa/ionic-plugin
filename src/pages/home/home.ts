import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  destination:string;
  start:string;

  constructor(public navCtrl: NavController, private launchNavigator: LaunchNavigator) {
    this.start = '';
    this.destination = 'Westminster, London, UK';
  }

  openApp(){
    let options: LaunchNavigatorOptions = {
      start: this.start,
      //app: LaunchNavigator.APPS.UBER
    };
    
    this.launchNavigator.navigate(this.destination, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );

  }

}
