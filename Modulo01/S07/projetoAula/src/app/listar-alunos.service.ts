import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarAlunosService {
  public aluno1 : string[] = ['Pamela', '29', "finanças"];
  public aluno2: string[] = ['Clei', '31', "Engenharia"];
  public aluno3 : string[] = ['Sophia', '01', "Desocupada"];


  constructor() { }

  public getAluno1() : string []{
    return this.aluno1;
  } 
  public getAluno2() : string []{
    return this.aluno2;
  }
  public getAluno3() : string []{
    return this.aluno3;
  }
}
