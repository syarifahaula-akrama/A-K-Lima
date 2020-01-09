import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-burgerkampoeng',
  templateUrl: './burgerkampoeng.page.html',
  styleUrls: ['./burgerkampoeng.page.scss'],
})
export class BurgerkampoengPage implements OnInit {

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
