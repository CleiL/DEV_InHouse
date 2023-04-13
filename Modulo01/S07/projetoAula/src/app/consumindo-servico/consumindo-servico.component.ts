import { Component } from '@angular/core';
import { ListarAlunosService } from '../listar-alunos.service';

@Component({
  selector: 'app-consumindo-servico',
  templateUrl: './consumindo-servico.component.html',
  styleUrls: ['./consumindo-servico.component.css']
})
export class ConsumindoServicoComponent {

  public infoAluno1: string [] = [];
  public infoAluno2: string [] = [];
  public infoAluno3: string [] = [];

  constructor( private _service: ListarAlunosService) {}

  ngOninit(): void {
    this.getInfo1();   
    this.getInfo2();   
    this.getInfo3();   

  }
  
  public getInfo1() {
    return this.infoAluno1 = this._service.getAluno1();
  }
  public getInfo2() {
    return this.infoAluno2 = this._service.getAluno2();
  }  
  public getInfo3() {
    return this.infoAluno3 = this._service.getAluno3();
  }

}
