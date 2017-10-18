import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { SignaturePage } from '../signature/signature';

/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-signature',
  templateUrl: 'modal-signature.html',
})
export class ModalSignaturePage {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };
  public signatureImage : any;
  Img:any;
  Data:any;
  myDate = new Date().toDateString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSignaturePage');
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.convasResize();
  }

  convasResize(){
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.signatureImage = this.signaturePad.toDataURL();
   // this.Data.Img = this.signatureImage;
    // this.Data = [{Img: this.signatureImage}]
    let Data2;
    if(localStorage.getItem('Data')){
      Data2 = JSON.parse(localStorage.getItem('Data'));
      console.log('data: ', Data2);
      this.Data = {
        Img: this.signatureImage,
        Date: this.myDate
      }
      
      Data2.push(this.Data);
    }

    localStorage.setItem('Data', JSON.stringify(Data2));
    
    this.viewCtrl.dismiss();
    //this.navCtrl.push(SignaturePage, {signatureImage: this.signatureImage});
    //console.log('xx',this.signaturePad.toData());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawCancel(){
    this.viewCtrl.dismiss();
  }

  drawClear(){
    this.signaturePad.clear();
  }

}
