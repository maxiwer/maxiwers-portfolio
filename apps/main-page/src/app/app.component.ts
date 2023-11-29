import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {SecretMemberRootComponent} from "../../../secret-member/src/app/secret-member-root.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AppComponent],
  selector: 'maxiwers-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main-page';
}
