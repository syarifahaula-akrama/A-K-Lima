import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbiburgerPage } from './abiburger.page';

describe('AbiburgerPage', () => {
  let component: AbiburgerPage;
  let fixture: ComponentFixture<AbiburgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiburgerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbiburgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
