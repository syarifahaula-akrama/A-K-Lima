import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodePage } from './metode.page';

describe('MetodePage', () => {
  let component: MetodePage;
  let fixture: ComponentFixture<MetodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
