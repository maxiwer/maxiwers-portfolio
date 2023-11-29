import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'maxiwers-portfolio-lorem',
  templateUrl: './secret-member-root.component.html',
  styleUrls: ['./secret-member-root.component.scss'],
})
export class SecretMemberRootComponent {
  title = 'secret-member';
}
