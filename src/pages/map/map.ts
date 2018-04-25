import { Component, ViewChild, ElementRef, Input  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  private todo : FormGroup;

  map: any;
  geocoder: any;
  LatLng = new google.maps.LatLng(13.76340,100.50671);

  private Customer;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap2();
  }

  logForm(){
    console.log(this.todo.value)
  }

  initMap2() {

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.LatLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    this.geocoder = new google.maps.Geocoder();

  //   document.getElementById('submit').addEventListener('click', function() {
  //     this.geocodeAddress(geocoder, map);
  //   });
  }

  // geocodeAddress(geocoder, resultsMap) {
  //   var address = document.getElementById('address');
   
  //   geocoder.geocode({'address': address}, function(results, status) {
  //     if (status === 'OK') {
  //       resultsMap.setCenter(results[0].geometry.location);
  //       var marker = new google.maps.Marker({
  //         map: resultsMap,
  //         position: results[0].geometry.location
  //       });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }


  SaveCutomer(){
    console.log("test");
    
  }

}
