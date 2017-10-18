import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignaturePage } from '../pages/signature/signature';
import { ModalSignaturePage } from '../pages/signature/modal-signature';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { Dialogs } from '@ionic-native/dialogs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignaturePage,
    ModalSignaturePage
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignaturePage,
    ModalSignaturePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Dialogs,
    BarcodeScanner,
    Camera,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
