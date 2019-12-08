import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HargaPage } from './harga.page';

describe('HargaPage', () => {
  let component: HargaPage;
  let fixture: ComponentFixture<HargaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HargaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
