import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penjual',
  templateUrl: './penjual.page.html',
  styleUrls: ['./penjual.page.scss'],
})
export class PenjualPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  burger1() {
    this.router.navigate(['/burgeredi']);
  }

  burger2() {
    this.router.navigate(['/burgerabi']);
  }

  burger3() {
    this.router.navigate(['/burgerbudi']);
  }

  burger4() {
    this.router.navigate(['/burgerdani']);
  }

}