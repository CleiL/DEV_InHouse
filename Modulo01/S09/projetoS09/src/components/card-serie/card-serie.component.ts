import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-serie',
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.scss']
})
export class CardSerieComponent {
  @Input() Series : any;
  @Output() eventemitter: EventEmitter<any> = new EventEmitter<any>();

  enviarEvento(){
    this.eventemitter.emit(`Ver series foi executada em: ${this.Series.id} `);
  }

  }

