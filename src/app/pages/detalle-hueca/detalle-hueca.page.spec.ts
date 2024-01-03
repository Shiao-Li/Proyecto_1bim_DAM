import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleHuecaPage } from './detalle-hueca.page';

describe('DetalleHuecaPage', () => {
  let component: DetalleHuecaPage;
  let fixture: ComponentFixture<DetalleHuecaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleHuecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
