import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor (private logger: LoggingService) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
  }

}
