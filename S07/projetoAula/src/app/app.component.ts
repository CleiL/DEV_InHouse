import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSource : string = "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg";
  card_body : string = "Star Wars - Leia";
  card_test : string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  btn_card : string = "Go somewhere";
}