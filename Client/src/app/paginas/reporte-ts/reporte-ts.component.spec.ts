import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTSComponent } from './reporte-ts.component';

describe('ReporteTSComponent', () => {
  let component: ReporteTSComponent;
  let fixture: ComponentFixture<ReporteTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteTSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
