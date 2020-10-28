import { Component, OnInit } from '@angular/core';
import { CompetitorsService } from '../../../services/competitors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competitor-details',
  templateUrl: './competitor-details.component.html',
  styleUrls: ['./competitor-details.component.css']
})
export class CompetitorDetailsComponent implements OnInit {
  competitor: any;

  constructor(private competitorsService: CompetitorsService, private route: ActivatedRoute) { }
  compID = this.route.snapshot.params.id;
  message = {
    model: 'Competitors',
    id: this.compID
  }

  ngOnInit(): void {
    this.getbyId();
  }
  getbyId() {

    return this.competitorsService.getbyId(this.route.snapshot.params.id)
      .subscribe(
        res => this.competitor = res
      );
  }
}
