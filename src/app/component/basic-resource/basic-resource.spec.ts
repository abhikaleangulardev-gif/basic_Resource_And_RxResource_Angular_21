import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicResource } from './basic-resource';

describe('BasicResource', () => {
  let component: BasicResource;
  let fixture: ComponentFixture<BasicResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicResource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicResource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
