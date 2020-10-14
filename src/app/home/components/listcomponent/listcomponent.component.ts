import { Component, Input, OnInit } from '@angular/core';
import { Storage } from './../../../app.model';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.scss'],
})
export class ListcomponentComponent implements OnInit {
  @Input() storage: Storage[];
  constructor() { }

  ngOnInit() {}


  
}
