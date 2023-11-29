import { Route } from '@angular/router';
import {SecretMemberRootComponent} from "../../../secret-member/src/app/secret-member-root.component";

export const appRoutes: Route[] = [
  {
    path: 'secret-member',
    component: SecretMemberRootComponent
  }
];
