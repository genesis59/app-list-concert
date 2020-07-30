import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {

  @Input() max = 5;
  @Input() activeColor = 'warning';
  @Input() inactiveColor = 'medium';

  public values: number[] = [];

  @Input() starValue;
  @Output() starValueChange: EventEmitter<number>;





  constructor() {
    this.starValueChange = new EventEmitter<number>();
  }

  ngOnInit() {
    for (let i = 1; i <= this.max; i++) {
      this.values.push(i);
    }
  }

  setStarValue(n: number) {
    this.starValue = n;
    console.log(this.starValue);
    this.starValueChange.emit(n);
  }

}
