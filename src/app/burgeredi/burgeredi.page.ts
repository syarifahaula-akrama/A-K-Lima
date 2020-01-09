import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgeredi',
  templateUrl: './burgeredi.page.html',
  styleUrls: ['./burgeredi.page.scss'],
})
export class BurgerediPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/penjual']);
  }

}
