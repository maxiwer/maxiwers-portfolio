import { Route } from '@angular/router';
import {SecretMemberRootComponent} from "../../../secret-member/src/app/secret-member-root.component";

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../app/pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'secret-member',
    component: SecretMemberRootComponent
  }
];
