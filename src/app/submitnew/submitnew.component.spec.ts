import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitnewComponent } from './submitnew.component';

describe('SubmitnewComponent', () => {
  let component: SubmitnewComponent;
  let fixture: ComponentFixture<SubmitnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitnewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
