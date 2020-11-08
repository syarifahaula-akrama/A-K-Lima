import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerminiPage } from './burgermini.page';

describe('BurgerminiPage', () => {
  let component: BurgerminiPage;
  let fixture: ComponentFixture<BurgerminiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerminiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerminiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
