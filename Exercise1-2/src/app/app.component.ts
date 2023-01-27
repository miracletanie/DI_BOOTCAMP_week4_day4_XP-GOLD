import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  location = {
    address: "BP 01 anyama"
  }

  submitForm(value: any) {
    console.log( value )
  }
}
