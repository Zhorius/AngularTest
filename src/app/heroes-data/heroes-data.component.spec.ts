import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDataComponent } from './heroes-data.component';

describe('HeroesDataComponent', () => {
  let component: HeroesDataComponent;
  let fixture: ComponentFixture<HeroesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
