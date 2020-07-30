import { ConcertsService, ConcertsInterface } from './../../services/concerts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  public groupe: string = '';
  public salle: string = '';
  public concertList: ConcertsInterface[];
  public somme: number;
  public nbreObjet: number;
  public moyGroup: number;
  public showMessage: boolean;
  public moySalle: number;
  public notScore: string;

  constructor(private concertService: ConcertsService) { }

  StatByGroup() {
    this.somme = 0;
    this.nbreObjet = 0;
    this.notScore = '';
    this.showMessage = false;
    for (let item of this.concertList) {
      if (item.Group === this.groupe) {
        this.somme += item.Score;
        this.nbreObjet++;
      }
    }
    if (this.nbreObjet == 0) {
      this.showMessage = true;
      this.notScore = 'Aucune note à ce jour';
    } else {
      this.moyGroup = this.somme / this.nbreObjet;
    }
  }

  statBySalle() {
    {
      this.somme = 0;
      this.nbreObjet = 0;
      this.notScore = '';
      this.showMessage = false;
      for (let item of this.concertList) {
        if (item.place === this.salle) {
          this.somme += item.Score;
          this.nbreObjet++;
        }
      }
      if (this.nbreObjet == 0) {
        this.showMessage = true;
        this.notScore = 'Aucune note à ce jour';
      } else {
        this.moySalle = this.somme / this.nbreObjet;
      }

    }
  }

  ngOnInit() {
    this.concertService.loadConcert();
    this.concertService.concertListChanged.subscribe(data => this.concertList = data);
  }

}
