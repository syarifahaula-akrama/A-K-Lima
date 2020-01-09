import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-burgermadu',
  templateUrl: './burgermadu.page.html',
  styleUrls: ['./burgermadu.page.scss'],
})
export class BurgermaduPage implements OnInit {

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
