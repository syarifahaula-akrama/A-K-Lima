import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgerdani',
  templateUrl: './burgerdani.page.html',
  styleUrls: ['./burgerdani.page.scss'],
})
export class BurgerdaniPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/penjual']);
  }

}
