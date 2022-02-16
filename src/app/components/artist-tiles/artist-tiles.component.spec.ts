import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTilesComponent } from './artist-tiles.component';

describe('ArtistTilesComponent', () => {
  let component: ArtistTilesComponent;
  let fixture: ComponentFixture<ArtistTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
