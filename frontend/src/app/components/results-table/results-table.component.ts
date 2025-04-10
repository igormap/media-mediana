import { Component } from '@angular/core';
import { AppThDirective } from '../th/th.component';
import { AppTdDirective } from '../td/td.component';
import { TagStatusDirective } from '../tag-status/tag-status.component';
import { Status } from '../tag-status/tag-status.component';

@Component({
  selector: 'app-results-table',
  imports: [AppThDirective, AppTdDirective, TagStatusDirective],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css',
  standalone: true,
})
export class ResultsTableComponent {
  statusEnum = Status;
  tableHeaders = [
    '#ID',
    'Valor A',
    'Valor B',
    'Valor C',
    'Média',
    'Mediana',
    'Status',
  ];

  data = Array.from({ length: 10 }, (_, i) => ({
    col1: `Linha ${i + 1} - Col 1`,
    col2: `Col 2`,
    col3: `Col 3`,
    col4: `Col 4`,
    col5: `Col 5`,
    col6: `Col 6`,
    col7: i % 2 === 0 ? Status.Concluded : Status.Processing,
  }));
}
