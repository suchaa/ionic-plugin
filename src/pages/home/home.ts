import { Component, ViewChild, ElementRef, Input } from '@angular/core';
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
  LatLng = new google.maps.LatLng(13.76340,100.50671);
  lat: string;
  lng: string;
  inputlat:any;
  inputlng:any;
  geocoder: any;
  infowindow: any;
  messagewindow: any;
  title: string;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionsService = new google.maps.DirectionsService;

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

  /** open application google maps on mobile */
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

  //initMap() {
  //this.map = new google.maps.Map(document.getElementById('map'), {
  //  center: {lat: 13.736717, lng: 100.523186},
  //zoom: 8
  // });

  //  this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //    zoom: 11,
  //    mapTypeId: 'roadmap',
  //    center: { lat: 13.7706053, lng: 100.54143549999999 }
  //  });
  //   this.directionsDisplay.setMap(this.map);

  // for (let i in this.location) {
  //   this.marker[i] = new google.maps.Marker({
  //     position: { lat: this.location[i].la, lng: this.location[i].ln },
  //     map: this.map,
  //     title: this.location[i].title
  //   });

  //   let getPosition = { lat: this.location[i].la, lng: this.location[i].ln };

  //   google.maps.event.addListener(this.marker[i], 'click', function () {
  //     this.map.setZoom(17);
  //     this.map.setCenter(getPosition);
  //   });
  // }

  //}

  /** load map */
  initMap() {

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.LatLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //------------------------------
    this.mark(this.LatLng, this.map);
    this.getLatLng();

    this.infowindow = new google.maps.InfoWindow({
      content: document.getElementById('info')
    });
    this.infowindow.open(this.map, this.marker);
    //------------------------------

  // search map
  //   this.geocoder = new google.maps.Geocoder();
  //   document.getElementById('submit').addEventListener('click', function() {
  //     this.geocodeAddress(this.geocoder, this.map);
  //   });
  }

  // geocodeAddress(geocoder, resultsMap) {
  //   var address = document.getElementById('address') as HTMLInputElement;
  //   address.value;
  //   geocoder.geocode({'address': address}, function(results, status) {
  //     if (status === 'OK') {
  //       resultsMap.setCenter(results.geometry.location);
  //       var marker = new google.maps.Marker({
  //         map: resultsMap,
  //         position: results.geometry.location
  //       });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }

  /** marker on map */
  mark(LatLng, map) {
    this.marker = new google.maps.Marker({
      position: LatLng,
      map: map,
      draggable: true
    });
  }

  /** get lat lng from function mark() */
  getLatLng() {
    google.maps.event.addListener(this.marker, 'dragend', function (evt) {
      this.lat = evt.latLng.lat().toFixed(5);
      this.lng = evt.latLng.lng().toFixed(5);
      document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + this.lat + ' Current Lng: ' + this.lng + '</p>';
      console.log('(getLatLng) lat: ', this.lat, ', lng: ', this.lng);
      
      this.inputlat = document.getElementById('lat') as HTMLInputElement;
      this.inputlat.value = this.lat;
      this.inputlng = document.getElementById('lng') as HTMLInputElement;
      this.inputlng.value = this.lng;

    });

    google.maps.event.addListener(this.marker, 'dragstart', function (evt) {
      document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
    });
  }

  /** get current lat lng */
  geolocation() {

    // Try HTML5 geolocation.
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     let pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //     document.getElementById('current').innerHTML = ' <p>Marker dropped: Current Lat: '+ pos.lat.toFixed(5) +' Current Lng: '+ pos.lng.toFixed(5) +'</p>';
    //     let x = {lat: pos.lat.toFixed(5),lng: pos.lng.toFixed(5)};
    //     console.log('geolocation: ',x);
    //   });
    // }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
      
    }else{
      console.log('fail');
    }
    function displayLocationInfo(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      document.getElementById('current').innerHTML = ' <p>Marker dropped: Current Lat: '+ lat +' Current Lng: '+ lng +'</p>';
      console.log(`(Geolocation) lat: ${ lat } | lng: ${ lng }`);
      
      document.getElementById('lat').innerHTML = `<p>${ lat }</p>`;
      document.getElementById('lng').innerHTML = `<p>${ lng }</p>`;
    }

  }

  /** save data from infowindow */
  saveData(){
    this.inputlat = document.getElementById('lat') as HTMLInputElement;
    this.inputlng = document.getElementById('lng') as HTMLInputElement;
    if(this.inputlat.value == "" || this.inputlng.value == ""){
      console.log('input null');
    }else{
      console.log('saved.', this.inputlat.value,', ', this.inputlng.value);
    }
  }

  /** search map */
  getItems(ev: any) {
    // this.loadData();
    // Reset items back to all of the items

    // set val to the value of the searchbar
    // let val = ev.target.value;

    // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.location = this.location.filter((item) => {
    //     return (item.shop.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }

  




}
