import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController, NavController } from '@ionic/angular';
import { AppService } from '../app.service';
import { Storage } from './../app.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
storage: Storage[];
selection: boolean = false;
private list = [];

  constructor(
    private appService: AppService,
    private router: Router,
    private alertCtrl : AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
    // this.storage = this.appService.getAllStorage();
  }

  ionViewWillEnter(){
    this.storage = this.appService.getAllStorage();
  }

  // delete(storage: Storage, slidingItem: IonItemSliding){
  //   slidingItem.close();
  //   console.log(storage.id, 'added to favorite');
  //   // this.deleteStorage(storage.id);
  // }

  deleteStorage(str: string){
    console.log("masuk function ");
    console.log(str);
    this.presentLoading().then(() => {
      this.appService.deleteStorage(str);
      this.router.navigateByUrl('/');
      this.appService.presentToast();
    });
  }
  
  async presentAlert(storage: Storage){
    // slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Hapus Storage',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteStorage(storage.id)
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Deleting storage...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  edit(str : Storage){
    console.log(str);
    this.router.navigateByUrl('/admin/' + str.id);
  }

  press(){
    // console.log("event : ");
    this.selection = true;
    return this.selection;
  }

  selectSize(event, str){
    // console.log("event: "+ event.target.checked);
    if(event.target.checked == true){
      this.list.push(str);
      console.log(this.list);
    } 
  }

  delete(){
    console.log("masuk delete");
    console.log(this.list);
    this.presentLoading().then(() => {
      this.appService.deleteMultiple(this.list);
      this.router.navigateByUrl('/');
      // this.appService.presentToast();
    });
    this.selection = false;
  }



}
