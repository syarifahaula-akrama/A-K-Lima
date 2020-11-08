import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgermini',
  templateUrl: './burgermini.page.html',
  styleUrls: ['./burgermini.page.scss'],
})
export class BurgerminiPage implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    private router: Router

  ) { }

  ngOnInit() {
  }
  kembali() {
    this.router.navigate(['/burgerabi']);
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
