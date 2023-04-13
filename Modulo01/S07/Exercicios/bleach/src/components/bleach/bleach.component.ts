import { Component } from '@angular/core';

@Component({
  selector: 'app-bleach',
  templateUrl: './bleach.component.html',
  styleUrls: ['./bleach.component.css']
})
export class BleachComponent {

  public name : string = 'bleach';
  public count : number = 0;
  public count2 : number = 0;
  public disabled : boolean = true;
  public imgSource : string = 'https://images2.alphacoders.com/221/thumbbig-221620.webp'

}
