import { Component } from '@angular/core';
import { AppThDirective } from '../th/th.component';
import { AppTdDirective } from '../td/td.component';
import { TagStatusDirective } from '../tag-status/tag-status.component';
import { Status } from '../tag-status/tag-status.component';
import { ApiService } from '../../services/api.service';
import { CalculateResponse } from '../../types/calculate-response.type';
import { HttpClientModule } from '@angular/common/http';
import { Subscription, switchMap, timer } from 'rxjs';

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
  statusEnum = 'Processando';
  calculations: CalculateResponse[] = [];
  subscription: Subscription | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscription = timer(0, 2000)
      .pipe(switchMap(() => this.apiService.listResults()))
      .subscribe((dados) => {
        this.calculations = dados;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
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
