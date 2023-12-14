import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoreModule} from "./core/core.module";

@Component({
  standalone: true,
  imports: [RouterModule, CoreModule],
  selector: 'maxiwers-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main-page';
}
