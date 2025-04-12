import { Component } from '@angular/core';
import { AppInputComponent } from '../input/input.component';
import { ResultsTableComponent } from '../results-table/results-table.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { customNumericValidator } from '../../validators/validate-numbers';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [
    AppInputComponent,
    ResultsTableComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService],
})
export class HomeComponent {
  calculateForm!: FormGroup;

  constructor(private apiService: ApiService) {
    this.calculateForm = new FormGroup({
      number1: new FormControl('', [
        Validators.required,
        customNumericValidator,
      ]),
      number2: new FormControl('', [
        Validators.required,
        customNumericValidator,
      ]),
      number3: new FormControl('', [
        Validators.required,
        customNumericValidator,
      ]),
    });
  }
  submit() {
    if (this.calculateForm.valid) {
      this.apiService.calculate(this.calculateForm.value).subscribe({
        next: (response) => {
          this.calculateForm.reset();
          console.log(response);
        },
      });
    }
  }
}
