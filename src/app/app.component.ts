import { Component, OnInit } from '@angular/core';
import { AppService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
