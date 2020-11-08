import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerpancongPage } from './burgerpancong.page';

describe('BurgerpancongPage', () => {
  let component: BurgerpancongPage;
  let fixture: ComponentFixture<BurgerpancongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerpancongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerpancongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
