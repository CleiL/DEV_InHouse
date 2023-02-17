import { Component } from '@angular/core';

@Component({
  selector: 'app-projeinho-aula',
  templateUrl: './projeinho-aula.component.html',
  styleUrls: ['./projeinho-aula.component.css']
})
export class ProjeinhoAulaComponent {
  
  public name: string = 'zebra'
  public count: number = 0
  public counter: number = 0
  public disabled: boolean = true
  public imgSource: string = 'https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_640.jpg'

  public increment() {
    this.counter++;
  }

}
