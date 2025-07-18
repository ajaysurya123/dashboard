import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartLine } from './dashboard-chart-line';

describe('DashboardChartLine', () => {
  let component: DashboardChartLine;
  let fixture: ComponentFixture<DashboardChartLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChartLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChartLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
