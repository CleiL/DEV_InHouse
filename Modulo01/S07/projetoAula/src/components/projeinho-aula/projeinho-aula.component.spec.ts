import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeinhoAulaComponent } from './projeinho-aula.component';

describe('ProjeinhoAulaComponent', () => {
  let component: ProjeinhoAulaComponent;
  let fixture: ComponentFixture<ProjeinhoAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeinhoAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjeinhoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
