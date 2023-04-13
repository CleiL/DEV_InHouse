import { Component } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent {
  
  lista = [
    {nome: 'filme1', duracao:"20 min"},
    {nome: 'filme2', duracao:"20 min"},
    {nome: 'filme3', duracao:"20 min"}

  ]

}
