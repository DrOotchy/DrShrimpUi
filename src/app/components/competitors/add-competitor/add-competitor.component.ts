import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitorsService } from '../../../services/competitors.service';
@Component({
  selector: 'app-add-competitor',
  templateUrl: './add-competitor.component.html',
  styleUrls: ['./add-competitor.component.css']
})
export class AddCompetitorComponent implements OnInit {
  competitors = {
    name: '',
    description: '',
    area: '',
    rating: '',
    url: ''
  };
  constructor(private competitorsService: CompetitorsService, private router: Router) { }

  ngOnInit(): void {
  }
  addCompetitor(formObj) {
    return this.competitorsService.newCompetitor(formObj)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/competitorsdetails/' + res._id]);
      });
  }
}
