import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiragComponent } from './chirag.component';

describe('ChiragComponent', () => {
  let component: ChiragComponent;
  let fixture: ComponentFixture<ChiragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
