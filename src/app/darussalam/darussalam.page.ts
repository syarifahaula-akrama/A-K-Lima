import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-darussalam',
  templateUrl: './darussalam.page.html',
  styleUrls: ['./darussalam.page.scss'],
})
export class DarussalamPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.navigateRoot('/lokasi');
  }
}
