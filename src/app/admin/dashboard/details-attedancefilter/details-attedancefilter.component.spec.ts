import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAttedancefilterComponent } from './details-attedancefilter.component';

describe('DetailsAttedancefilterComponent', () => {
  let component: DetailsAttedancefilterComponent;
  let fixture: ComponentFixture<DetailsAttedancefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAttedancefilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAttedancefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
