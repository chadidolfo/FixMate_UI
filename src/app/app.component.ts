import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DemoNgZorroModule } from './DemoNgZorroModule';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,DemoNgZorroModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FixMate_UI';
}
