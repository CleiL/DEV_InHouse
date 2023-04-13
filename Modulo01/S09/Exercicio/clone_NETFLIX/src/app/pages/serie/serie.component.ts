import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/common/serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit{
  serie: Serie = new Serie;
  constructor(private serieService: SerieService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getSerie(params['id']);
    });
  }

  getSerie(id:string){
    this.serieService.getSerie(id).subscribe((serie) => {
      this.serie = serie;
    })
  }
}
