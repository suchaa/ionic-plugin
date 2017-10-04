import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  marker = [];
  title: string;
  //directionsDisplay = new google.maps.DirectionsRenderer;

  location = [];
  destination: string;
  start: string;

  constructor(public navCtrl: NavController, private launchNavigator: LaunchNavigator) {
    this.location = [
      { title: 'กรุงเทพมหานคร', la: 13.75616, ln: 100.50108 },
      { title: 'อนุสาวรีย์ชัยสมรภูมิ', la: 13.76493, ln: 100.53829 },
      { title: 'รพ.พยาไท 2 อินเตอร์เนชันแนล', la: 13.76984, ln: 100.54044 },
      { title: 'เซ็นทรัลเวิลล์', la: 13.74600, ln: 100.54001 },
      { title: 'ห้วยขวาง', la: 13.76928, ln: 100.58133 },
      { title: 'สะพานพระราม 8', la: 13.76891, ln: 100.49721 }
    ];

    this.start = '';
    this.destination = '13.76493, 100.53829';
  }

  ionViewDidLoad() {
    this.initMap();
  }

  openApp() {
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

  open(i) {
    console.log('click!');

  }

  openApplist(i) {
    let options: LaunchNavigatorOptions = {
      start: '',
      //app: LaunchNavigator.APPS.UBER
    };
    let dest = i.la + ',' + i.ln;
    console.log(dest);

    this.launchNavigator.navigate(dest, options)
      .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
      );
  }

  initMap() {
    //  this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //    zoom: 11,
    //    mapTypeId: 'roadmap',
    //    center: { lat: 13.7706053, lng: 100.54143549999999 }
    //  });
    //   //this.directionsDisplay.setMap(this.map);

    //   for (let i in this.location) {
    //     this.marker[i] = new google.maps.Marker({
    //       position: { lat: this.location[i].la, lng: this.location[i].ln },
    //       map: this.map,
    //       title: this.location[i].title
    //     });

    //     let getPosition = { lat: this.location[i].la, lng: this.location[i].ln };

    //     google.maps.event.addListener(this.marker[i], 'click', function () {
    //       this.map.setZoom(17);
    //       this.map.setCenter(getPosition);
    //     });
    //   }

  }

}
