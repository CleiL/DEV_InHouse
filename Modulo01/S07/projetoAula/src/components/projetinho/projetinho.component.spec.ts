import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetinhoComponent } from './projetinho.component';

describe('ProjetinhoComponent', () => {
  let component: ProjetinhoComponent;
  let fixture: ComponentFixture<ProjetinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
