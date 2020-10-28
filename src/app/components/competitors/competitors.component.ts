import { Component, OnInit } from '@angular/core';
import { CompetitorsService } from '../../services/competitors.service';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})
export class CompetitorsComponent implements OnInit {
  allcompetitors: any;
  constructor(private competitorsService: CompetitorsService) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
  return this.competitorsService.getAllCompetitors().subscribe(data => this.allcompetitors = data )
}
}
