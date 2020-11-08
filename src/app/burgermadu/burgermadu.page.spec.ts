import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgermaduPage } from './burgermadu.page';

describe('BurgermaduPage', () => {
  let component: BurgermaduPage;
  let fixture: ComponentFixture<BurgermaduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgermaduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgermaduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
