import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicTypesDetailComponent } from './magic-types-detail.component';

describe('MagicTypesDetailComponent', () => {
  let component: MagicTypesDetailComponent;
  let fixture: ComponentFixture<MagicTypesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MagicTypesDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicTypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
