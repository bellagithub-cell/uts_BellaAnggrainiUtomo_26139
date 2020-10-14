import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Storage } from './../../app.model';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  param: Storage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private router: Router,
    private loadingCtrl: LoadingController,

  ) { }

  ngOnInit() {
    // buat dapetin paramnya
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('editId')){
        return;
      }
      const eId = paramMap.get('editId');
      this.param = this.appService.getStorage(eId);
      // console.log(this.param);
    });
  }

  onLogin(){
    console.log("oke");
  }

  onSubmit(form: NgForm){
    console.log(form);
    // console.log(form);
    if(!form.valid){
      return;
    }
    this.editContact(form);
  }

  editContact(form){
    console.log(form.value.id);
    this.presentLoading().then(() => {
      this.appService.EditContact(form);
        this.router.navigate(['./admin']);
        this.appService.presentToastedit();
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Editing Storage...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  
}
