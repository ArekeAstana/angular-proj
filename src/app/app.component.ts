import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  //template: '<h1>{{name}}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works, ha u doin!';
  name = 'areke';

  ninja = {
    name: "Sean",
    belt: "Yellow"
  };

  yell(e) {
    alert("I am yelling");
    console.log(e);
  }
}
