import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerkentangPage } from './burgerkentang.page';

describe('BurgerkentangPage', () => {
  let component: BurgerkentangPage;
  let fixture: ComponentFixture<BurgerkentangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerkentangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerkentangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
