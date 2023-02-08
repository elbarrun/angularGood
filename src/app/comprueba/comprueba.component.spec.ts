import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompruebaComponent } from './comprueba.component';

describe('CompruebaComponent', () => {
  let component: CompruebaComponent;
  let fixture: ComponentFixture<CompruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
