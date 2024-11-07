import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSublinkComponent } from './sidebar-sublink.component';

describe('SidebarSublinkComponent', () => {
  let component: SidebarSublinkComponent;
  let fixture: ComponentFixture<SidebarSublinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSublinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSublinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
