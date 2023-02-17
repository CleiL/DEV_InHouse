import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-um',
  templateUrl: './teste-um.component.html',
  styleUrls: ['./teste-um.component.css']
})
export class TesteUmComponent {
  name : string = "Olá";
  count : number = 0;
  disable: boolean = true;
  image : string = "https://criticalhits.com.br/wp-content/uploads/2022/09/One-Piece-Nami.jpg";

  add(){
    this.count++
  }

  onOff(){
    if(this.disable == true) {
        this.disable = false;
      } else{
        this.disable = true;
      }
  }
}
