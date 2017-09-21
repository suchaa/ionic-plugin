import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    private camera: Camera
  ) {

  }
  btnTakeAphoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //var image = document.getElementById('MyImage');
      //image.src = 'data:image/jpeg;base64,' + imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
      
    });
  }

  btnUpload() {

  }

  btnGallery() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //var image = document.getElementById('MyImage');
      //image.src = 'data:image/jpeg;base64,' + imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
      
    });

  }

}
