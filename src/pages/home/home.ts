import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

//declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location = [];
  destination:string;
  start:string;

  constructor(public navCtrl: NavController, private launchNavigator: LaunchNavigator) {
    this.location = [
      { title: 'กรุงเทพมหานคร', la: 13.75616, ln: 100.50108 },
      { title: 'อนุสาวรีย์ชัยสมรภูมิ', la: 13.7649303, ln: 100.5361015 },
      { title: 'รพ.พยาไท 2 อินเตอร์เนชันแนล', la: 13.76984, ln: 100.54044 },
      { title: 'เซ็นทรัลเวิลล์', la: 13.74600, ln: 100.54001 },
      { title: 'ห้วยขวาง', la: 13.76928, ln: 100.58133 },
      { title: 'สะพานพระราม 8', la: 13.76891, ln: 100.49721 }
    ];
   
    this.start = '';
    this.destination = '13.76493, 100.53829';
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

  openApplist(i){
    let options: LaunchNavigatorOptions = {
      start: '',
      //app: LaunchNavigator.APPS.UBER
    };
    let dest = i.la+ ',' +i.ln;
    console.log(dest);
    
    this.launchNavigator.navigate(dest, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

}
