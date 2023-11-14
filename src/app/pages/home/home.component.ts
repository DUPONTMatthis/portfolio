import { Component } from '@angular/core';
import { HandCardComponent } from 'src/app/shared/components/hand-card/hand-card.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [HandCardComponent, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
