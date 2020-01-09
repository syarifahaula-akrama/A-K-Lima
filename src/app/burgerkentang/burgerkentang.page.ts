import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-burgerkentang',
  templateUrl: './burgerkentang.page.html',
  styleUrls: ['./burgerkentang.page.scss'],
})
export class BurgerkentangPage implements OnInit {

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
