import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


export interface ConcertsInterface {
  "id": number;
  "date": Date;
  "place": string;
  "Group": string;
  "Score": number;
}

const URL = 'http://localhost:3000/concerts/';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {

  public concertList: ConcertsInterface[] = [];
  public concertListChanged: Subject<ConcertsInterface[]>;



  constructor(private http: HttpClient) {
    this.concertListChanged = new Subject<ConcertsInterface[]>();
  }



  public loadConcert() {
    this.http.get(URL).subscribe(
      (data: ConcertsInterface[]) => {
        this.concertList = data;
        this.concertListChanged.next(data);
      }
    );
  }

  public addConcert(concert: ConcertsInterface) {
    this.http.post(URL, concert).subscribe(
      (data: ConcertsInterface) => {
        
        console.log(data);
        
        this.concertList.push(data);
        this.concertListChanged.next(this.concertList);
      }
    );
  }

  public deleteConcert(concert: ConcertsInterface) {
    this.http.delete(URL + concert.id).subscribe(
      (data: ConcertsInterface) => {
        this.loadConcert();
      }
    )
  }

}
