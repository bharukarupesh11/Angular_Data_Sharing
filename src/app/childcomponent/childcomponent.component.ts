import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-childcomponent',
  template: `
  <h2>
  Count in component1   =  {{ count }}
</h2>
<button (click)='nextCount()'>Next Count from component1</button>
  `
})
export class ChildcomponentComponent implements OnInit {

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
