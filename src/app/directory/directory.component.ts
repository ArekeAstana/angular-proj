import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {

  classes = {'blue': true, 'red':false, 'underline': true};
  test = true;

  ninja: string;
  ninjas = [];

  //ninjas = [
    //{name: "Yoshi", belt: 'black'},
    //{name: "Rau", belt: 'yellow'},
    //{name: "Sean", belt: 'brown'},
    //{name: "Crystal", belt: 'green'}
  //]

  //constructor(private route: ActivatedRoute) {
    //this.ninja = route.snapshot.params['ninja'];
  //}

  constructor (private logger: LoggingService, private dataService: DataService) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    /*this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );*/
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      //console.log(snapshot.val())
      this.ninjas.push(snapshot.val())
    })
  }

  fbPostData(name, belt) {
    firebase.database().ref('/').push({name: name, belt: belt});
  }
}
