import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialTableComponent } from './trial-table.component';

describe('TrialTableComponent', () => {
  let component: TrialTableComponent;
  let fixture: ComponentFixture<TrialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
