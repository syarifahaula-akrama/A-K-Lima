import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgerabi',
  templateUrl: './burgerabi.page.html',
  styleUrls: ['./burgerabi.page.scss'],
})
export class BurgerabiPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  diklik() {
    this.router.navigate(['/followerabi']);
  }

  burger1() {
    this.router.navigate(['/mieburger']);
  }

  burger2() {
    this.router.navigate(['/burgermini']);
  }

  burger3() {
    this.router.navigate(['/burgerpancong']);
  }

  burger4() {
    this.router.navigate(['/burgerkampoeng']);
  }

  burger5() {
    this.router.navigate(['/burgermadu']);
  }

  burger6() {
    this.router.navigate(['/burgerkentang']);
  }

  kembali() {
    this.router.navigate(['/penjual']);
  }

}