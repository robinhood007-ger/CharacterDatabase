import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedDetailsComponent } from './verified-details.component';

describe('VerifiedDetailsComponent', () => {
  let component: VerifiedDetailsComponent;
  let fixture: ComponentFixture<VerifiedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
