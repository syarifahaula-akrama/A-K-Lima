import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lokasi',
  templateUrl: './lokasi.page.html',
  styleUrls: ['./lokasi.page.scss'],
})
export class LokasiPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  darussalam() {
    this.navCtrl.navigateRoot('/darussalam');
    
  }
  harga(){
    this.navCtrl.navigateRoot('/harga');
  }
}
