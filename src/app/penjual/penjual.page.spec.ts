import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenjualPage } from './penjual.page';

describe('PenjualPage', () => {
  let component: PenjualPage;
  let fixture: ComponentFixture<PenjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
