import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalSignaturePage } from '../signature/modal-signature';

/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  public signatureImage : any;
  Data:any;
  Img: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //this.signatureImage = navParams.get('signatureImage');
    this.Data = []

    if (localStorage.getItem('Data')) {
      this.Data = JSON.parse(localStorage.getItem('Data'));
    } else if (!localStorage.getItem('Data')) {
      localStorage.setItem('Data', JSON.stringify(this.Data));
    }

    console.log(this.Data);
    this.loadData();
    console.log('load data :',this.Data);
    
  }

  loadData(){
    if (localStorage.getItem('Data')) {
      this.Data = JSON.parse(localStorage.getItem('Data'));
    }else{
      console.log('null');
    }
    // this.signatureImage = this.Data.Img;
    // console.log('test: ',this.Data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePage');
  }

  delete(key){
    console.log('ลบ!', key);
    this.Data.splice(key, 1); //ลบจากหน้าจออย่างเดียว
    localStorage.setItem('Data', JSON.stringify(this.Data)); //ลบออกจาก localStorage  
  }

  btnSignature(){
   // this.navCtrl.push(ModalSignaturePage);
   let modal = this.modalCtrl.create(ModalSignaturePage);
   modal.present();

   modal.onDidDismiss(data => {
    this.loadData();
  }); 

  }

}
