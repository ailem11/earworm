import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonglistenerComponent } from './songlistener.component';

describe('SonglistenerComponent', () => {
  let component: SonglistenerComponent;
  let fixture: ComponentFixture<SonglistenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonglistenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonglistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
