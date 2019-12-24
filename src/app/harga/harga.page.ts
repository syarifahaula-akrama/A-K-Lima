import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-harga',
  templateUrl: './harga.page.html',
  styleUrls: ['./harga.page.scss'],
})
export class HargaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  harga(){
    this.navCtrl.navigateRoot('/harga');
  }
  lokasi(){
    this.navCtrl.navigateRoot('/lokasi');
  }
}
