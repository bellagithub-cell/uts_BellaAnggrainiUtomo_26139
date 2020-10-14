import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Storage } from './../../app.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
loadedStorage: Storage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appServices: AppService,
  ) { }

  ngOnInit() {
    // untuk dapetin param di url
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('detailId')){
        return;
      }
      const detailId = paramMap.get('detailId');
      this.loadedStorage = this.appServices.getStorage(detailId);
    });
  }

}
