import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculateResponse } from '../types/calculate-response.type';

interface CalculatePayload {
  number1: number;
  number2: number;
  number3: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:8000/api';

  calculate(payload: CalculatePayload) {
    return this.httpClient.post<CalculateResponse>(
      this.apiUrl + '/calculate/',
      payload
    );
  }
  listResults() {
    return this.httpClient.get<CalculateResponse[]>(this.apiUrl + '/results/');
  }
}
