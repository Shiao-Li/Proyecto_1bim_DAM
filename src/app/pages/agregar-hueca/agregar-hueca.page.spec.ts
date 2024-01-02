import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarHuecaPage } from './agregar-hueca.page';
import { IonicModule } from '@ionic/angular';

describe('AgregarHuecaPage', () => {
  let component: AgregarHuecaPage;
  let fixture: ComponentFixture<AgregarHuecaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarHuecaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(AgregarHuecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
