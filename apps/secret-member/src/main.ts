import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SecretMemberRootComponent } from './app/secret-member-root.component';

bootstrapApplication(SecretMemberRootComponent, appConfig).catch((err) =>
  console.error(err)
);
