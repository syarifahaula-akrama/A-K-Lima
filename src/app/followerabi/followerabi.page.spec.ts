import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowerabiPage } from './followerabi.page';

describe('FollowerabiPage', () => {
  let component: FollowerabiPage;
  let fixture: ComponentFixture<FollowerabiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerabiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowerabiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
