import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followerabi',
  templateUrl: './followerabi.page.html',
  styleUrls: ['./followerabi.page.scss'],
})
export class FollowerabiPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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
