import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyEmbedListComponent } from './spotify-embed-list.component';

describe('SpotifyEmbedListComponent', () => {
  let component: SpotifyEmbedListComponent;
  let fixture: ComponentFixture<SpotifyEmbedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyEmbedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyEmbedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
