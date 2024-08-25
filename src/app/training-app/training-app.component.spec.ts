import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAppComponent } from './training-app.component';

describe('TrainingAppComponent', () => {
  let component: TrainingAppComponent;
  let fixture: ComponentFixture<TrainingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
