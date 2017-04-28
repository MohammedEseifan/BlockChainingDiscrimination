import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiCardComponent } from './noti-card.component';

describe('NotiCardComponent', () => {
  let component: NotiCardComponent;
  let fixture: ComponentFixture<NotiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
