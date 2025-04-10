import { Component } from '@angular/core';
import { AppThDirective } from '../th/th.component';
import { AppTdDirective } from '../td/td.component';

@Component({
  selector: 'app-results-table',
  imports: [AppThDirective, AppTdDirective],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css',
  standalone: true,
})
export class ResultsTableComponent {
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
    col7: `Col 7`,
  }));
}
