import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerdaniPage } from './burgerdani.page';

describe('BurgerdaniPage', () => {
  let component: BurgerdaniPage;
  let fixture: ComponentFixture<BurgerdaniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerdaniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerdaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
