import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-appchild2',
  templateUrl: 'appchild2.component.html'
})
export class Appchild2Component implements OnInit {

  count: number;
  constructor(private appsevice: AppService) {
  }
  ngOnInit() {

    this.appsevice.count.subscribe(c => {
      this.count = c;
    });
  }
  nextCount() {
    this.appsevice.nextCount();
  }
}
