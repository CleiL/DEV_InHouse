import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projetinho',
  templateUrl: './projetinho.component.html',
  styleUrls: ['./projetinho.component.css']
})
export class ProjetinhoComponent {

@Input() imgSource : string = "https://cdn.mos.cms.futurecdn.net/FwNw2ZUryX6yAmFSSajDv4-970-80.jpg.webp";
@Input() card_body : string = "Star Wars - Luke";
@Input() card_test : string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
@Input() btn_card : string = "Go somewhere";

}
