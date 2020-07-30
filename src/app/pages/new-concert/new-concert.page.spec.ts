import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewConcertPage } from './new-concert.page';

describe('NewConcertPage', () => {
  let component: NewConcertPage;
  let fixture: ComponentFixture<NewConcertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConcertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewConcertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
