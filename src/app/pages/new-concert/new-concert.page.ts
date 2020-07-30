import { ConcertsService, ConcertsInterface } from './../../services/concerts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-concert',
  templateUrl: './new-concert.page.html',
  styleUrls: ['./new-concert.page.scss'],
})
export class NewConcertPage implements OnInit {

  public concert: ConcertsInterface = {
    id: null,
    date: null,
    place: "",
    Group: "",
    Score: 1
  }

  public grade = 3;

  constructor(private concertService: ConcertsService) { }

  public validate() {
    this.concert.Score = this.grade;
    this.concertService.addConcert(this.concert);
  }

  ngOnInit() {
  }

}
