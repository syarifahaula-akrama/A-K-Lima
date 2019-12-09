import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DarussalamPage } from './darussalam.page';

describe('DarussalamPage', () => {
  let component: DarussalamPage;
  let fixture: ComponentFixture<DarussalamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarussalamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DarussalamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
