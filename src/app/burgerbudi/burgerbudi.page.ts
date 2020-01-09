import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgerbudi',
  templateUrl: './burgerbudi.page.html',
  styleUrls: ['./burgerbudi.page.scss'],
})
export class BurgerbudiPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/penjual']);
  }

}
