import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartAll } from './dashboard-chart-all';

describe('DashboardChartAll', () => {
  let component: DashboardChartAll;
  let fixture: ComponentFixture<DashboardChartAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChartAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChartAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
