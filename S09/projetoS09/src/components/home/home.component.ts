import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  series = 
  [
    { id: '1', nome: 'Breaking Bad' },
    { id: '2', nome: 'The Walking Dead' },
    { id: '3', nome: 'Friends' },
    { id: '4', nome: 'The Big Bang: A Teoria' },
  ]

  tratarEvento(event: any){
    console.log(event)
  }

}
