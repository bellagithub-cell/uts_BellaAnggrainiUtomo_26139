import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
    private appService: AppService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('onLogin');
  }

  onSubmit(form: NgForm){
    console.log('onSubmit');
    // console.log(form.value.image);
    if(!form.valid){
      return;
    }
    this.addContact(form);
  }

  addContact(form){
    // kirim param yg udah didapet ke addContact
    console.log(form.value.harga);
    // console.log(form[0]);
    this.presentLoading().then(() => {
        this.appService.addContact(form);
        this.router.navigate(['./']);
        this.appService.presentToastadd();
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Adding Storage...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

}
