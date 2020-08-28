import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IanverseWorldComponent } from './ianverse-world.component';

describe('IanverseWorldComponent', () => {
  let component: IanverseWorldComponent;
  let fixture: ComponentFixture<IanverseWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IanverseWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IanverseWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
