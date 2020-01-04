import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 username: string = '';
  password: string = '';
  
  constructor(public navCtrl: NavController,
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    private storage: Storage
	) { }

  ngOnInit() {
  }
	beranda() {
		this.navCtrl.navigateRoot('/beranda');
	}

	async proseslogin() {
    if (this.username != '' && this.password != '') {
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.storage.set('session_storage', data.result);
         this.router.navigate(['/beranda']);
         const toast = await this.toastController.create({
          message: 'Berhasil Login Akun!',
          duration: 3000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
         toast.present();
       }
     });

    } else {
      const toast = await this.toastController.create({
        message: 'Username atau Password Salah',
        duration: 2000
      });
      toast.present();
    }

    this.username = '';
    this.password = '';

    }
}
