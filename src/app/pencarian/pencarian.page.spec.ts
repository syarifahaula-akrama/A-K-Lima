import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PencarianPage } from './pencarian.page';

describe('PencarianPage', () => {
  let component: PencarianPage;
  let fixture: ComponentFixture<PencarianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencarianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PencarianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
