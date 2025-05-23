import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdComponent } from './td.component';

describe('TdComponent', () => {
  let component: TdComponent;
  let fixture: ComponentFixture<TdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
