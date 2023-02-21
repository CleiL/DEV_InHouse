import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  
  public title = 'Galeria Bleach';


@Input() public fotos : string []  = [];

  public fotoAtual = 0;

  public primeiraFoto () {this.fotoAtual=this.primeiro();}

  public proxima(){this.fotoAtual++}
  public anterior(){this.fotoAtual--}

  public retornar(){this.fotoAtual = this.ultima();}

  public primeiro(){return 0;}
  public ultima(){return this.fotos.length -1;}

}
