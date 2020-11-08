import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerediPage } from './burgeredi.page';

describe('BurgerediPage', () => {
  let component: BurgerediPage;
  let fixture: ComponentFixture<BurgerediPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerediPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerediPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
