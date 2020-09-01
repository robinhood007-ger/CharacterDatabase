import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicTypesComponent } from './magic-types.component';

describe('MagicTypesComponent', () => {
  let component: MagicTypesComponent;
  let fixture: ComponentFixture<MagicTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MagicTypesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
