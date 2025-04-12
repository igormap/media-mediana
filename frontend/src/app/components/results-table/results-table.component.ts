import { Component } from '@angular/core';
import { AppThDirective } from '../th/th.component';
import { AppTdDirective } from '../td/td.component';
import { TagStatusDirective } from '../tag-status/tag-status.component';
import { Status } from '../tag-status/tag-status.component';
import { ApiService } from '../../services/api.service';
import { CalculateResponse } from '../../types/calculate-response.type';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-results-table',
  imports: [
    AppThDirective,
    AppTdDirective,
    TagStatusDirective,
    HttpClientModule,
  ],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css',
  standalone: true,
})
export class ResultsTableComponent {
  statusEnum = Status;
  calculations: CalculateResponse[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.listResults().subscribe({
      next: (results) => {
        console.log('Resultados:', results);
        this.calculations = results;
      },
      error: (err) => {
        console.error('Erro ao buscar resultados:', err);
      },
    });
  }

  tableHeaders = [
    '#ID',
    'Valor A',
    'Valor B',
    'Valor C',
    'Média',
    'Mediana',
    'Status',
  ];
}
