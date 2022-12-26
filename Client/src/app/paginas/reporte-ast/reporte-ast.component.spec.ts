import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteASTComponent } from './reporte-ast.component';

describe('ReporteASTComponent', () => {
  let component: ReporteASTComponent;
  let fixture: ComponentFixture<ReporteASTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteASTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteASTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
