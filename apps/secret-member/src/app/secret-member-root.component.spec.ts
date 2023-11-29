import { TestBed } from '@angular/core/testing';
import { SecretMemberRootComponent } from './secret-member-root.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretMemberRootComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SecretMemberRootComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome secret-member'
    );
  });

  it(`should have as title 'secret-member'`, () => {
    const fixture = TestBed.createComponent(SecretMemberRootComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('secret-member');
  });
});
