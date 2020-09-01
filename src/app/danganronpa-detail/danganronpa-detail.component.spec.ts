import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanganronpaDetailComponent } from './danganronpa-detail.component';

describe('DanganronpaDetailComponent', () => {
  let component: DanganronpaDetailComponent;
  let fixture: ComponentFixture<DanganronpaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DanganronpaDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanganronpaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
