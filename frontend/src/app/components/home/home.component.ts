import { Component } from '@angular/core';
import { AppInputComponent } from '../input/input.component';
import { ResultsTableComponent } from '../results-table/results-table.component';

@Component({
  selector: 'app-home',
  imports: [AppInputComponent, ResultsTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
