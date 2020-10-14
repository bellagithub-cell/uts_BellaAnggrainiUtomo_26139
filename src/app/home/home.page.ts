import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Storage } from './../app.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
islist: boolean = true;
icon: string = "grid";
storage: Storage[];

  constructor(private appService: AppService) {}

  contentlist(){
    if(this.islist == true){
      this.islist = false;
      this.icon = "list";
    } else {
      this.icon = "grid";
      this.islist = true;
    }
    console.log("ok");
    return [this.islist, this.icon];
  }

  ngOnInit(){
    // this.storage = this.appService.getAllStorage();
  }

  ionViewWillEnter(){
    this.storage = this.appService.getAllStorage();
  }

  

}
