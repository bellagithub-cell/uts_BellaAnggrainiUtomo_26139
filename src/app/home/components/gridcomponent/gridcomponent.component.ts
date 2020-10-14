import { Component, Input, OnInit } from '@angular/core';
import { Storage } from './../../../app.model';

@Component({
  selector: 'app-gridcomponent',
  templateUrl: './gridcomponent.component.html',
  styleUrls: ['./gridcomponent.component.scss'],
})
export class GridcomponentComponent implements OnInit {
  @Input() storage: Storage[];
  constructor() { }

  ngOnInit() {}

}
