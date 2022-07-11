import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExpComponent } from './job-exp.component';

describe('JobExpComponent', () => {
  let component: JobExpComponent;
  let fixture: ComponentFixture<JobExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
