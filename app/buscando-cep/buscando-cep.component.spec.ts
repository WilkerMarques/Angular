import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoCepComponent } from './buscando-cep.component';

describe('BuscandoCepComponent', () => {
  let component: BuscandoCepComponent;
  let fixture: ComponentFixture<BuscandoCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscandoCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
