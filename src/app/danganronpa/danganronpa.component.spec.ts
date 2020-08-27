import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanganronpaComponent } from './danganronpa.component';

describe('DanganronpaComponent', () => {
  let component: DanganronpaComponent;
  let fixture: ComponentFixture<DanganronpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanganronpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanganronpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
