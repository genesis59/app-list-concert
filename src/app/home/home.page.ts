import { Component } from '@angular/core';
import { ConcertsService, ConcertsInterface } from '../services/concerts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public concertList: ConcertsInterface[] = [];

  constructor(private concertService: ConcertsService, private router: Router, private ActiveRoute: ActivatedRoute) { }

  delete(concert: ConcertsInterface) {
    this.concertService.deleteConcert(concert);
  }

  ngOnInit() {
    this.concertService.loadConcert();
    this.concertService.concertListChanged.subscribe(data => this.concertList = data);
  }

}