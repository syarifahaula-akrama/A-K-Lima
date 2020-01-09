import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-burgermini',
  templateUrl: './burgermini.page.html',
  styleUrls: ['./burgermini.page.scss'],
})
export class BurgerminiPage implements OnInit {

  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Terimakasih telah order',
      message: 'silahkan tunggu konfirmasi dari penjual.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
