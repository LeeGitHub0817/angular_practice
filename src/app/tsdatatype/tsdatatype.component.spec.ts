import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsdatatypeComponent } from './tsdatatype.component';

describe('TsdatatypeComponent', () => {
  let component: TsdatatypeComponent;
  let fixture: ComponentFixture<TsdatatypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsdatatypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdatatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
