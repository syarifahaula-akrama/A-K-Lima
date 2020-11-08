import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerkampoengPage } from './burgerkampoeng.page';

describe('BurgerkampoengPage', () => {
  let component: BurgerkampoengPage;
  let fixture: ComponentFixture<BurgerkampoengPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerkampoengPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerkampoengPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
