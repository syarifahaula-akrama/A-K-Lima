import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerbudiPage } from './burgerbudi.page';

describe('BurgerbudiPage', () => {
  let component: BurgerbudiPage;
  let fixture: ComponentFixture<BurgerbudiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerbudiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerbudiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
