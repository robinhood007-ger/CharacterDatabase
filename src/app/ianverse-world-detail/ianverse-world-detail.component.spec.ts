import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IanverseWorldDetailComponent } from './ianverse-world-detail.component';

describe('IanverseWorldDetailComponent', () => {
  let component: IanverseWorldDetailComponent;
  let fixture: ComponentFixture<IanverseWorldDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IanverseWorldDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IanverseWorldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
