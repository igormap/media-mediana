import { Component } from '@angular/core';
import { AppInputComponent } from '../input/input.component';

@Component({
  selector: 'app-home',
  imports: [AppInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
