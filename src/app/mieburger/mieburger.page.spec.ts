import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MieburgerPage } from './mieburger.page';

describe('MieburgerPage', () => {
  let component: MieburgerPage;
  let fixture: ComponentFixture<MieburgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieburgerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MieburgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
