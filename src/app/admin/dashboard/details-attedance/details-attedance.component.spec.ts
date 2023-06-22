import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAttedanceComponent } from './details-attedance.component';

describe('DetailsAttedanceComponent', () => {
  let component: DetailsAttedanceComponent;
  let fixture: ComponentFixture<DetailsAttedanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAttedanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAttedanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
