import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgerkampoeng',
  templateUrl: './burgerkampoeng.page.html',
  styleUrls: ['./burgerkampoeng.page.scss'],
})
export class BurgerkampoengPage implements OnInit {

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
