import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerabiPage } from './burgerabi.page';

describe('BurgerabiPage', () => {
  let component: BurgerabiPage;
  let fixture: ComponentFixture<BurgerabiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerabiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerabiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
