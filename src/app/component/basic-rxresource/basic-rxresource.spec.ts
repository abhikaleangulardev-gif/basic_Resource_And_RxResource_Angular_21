import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRxresource } from './basic-rxresource';

describe('BasicRxresource', () => {
  let component: BasicRxresource;
  let fixture: ComponentFixture<BasicRxresource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRxresource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicRxresource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
