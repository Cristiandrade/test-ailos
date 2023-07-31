import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCooperateService } from '../add-cooperate.service';

@Component({
  selector: 'app-search-cpf',
  templateUrl: './search-cpf.component.html',
  styleUrls: ['./search-cpf.component.scss'],
})
export class SearchCpfComponent {
  formCooperate: FormGroup;
  formError = false;
  resultEmpty = false;

  loading = false;

  cooperate?: any;

  constructor(
    private fb: FormBuilder,
    private addCooperateService?: AddCooperateService
  ) {
    this.formCooperate = fb.group({
      cpf: [
        '',
        (Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11)),
      ],
    });
  }

  public searchCpf() {
    this.loading = true;
    this.resultEmpty = false;

    if (this.formCooperate.valid) {
      this.cooperate = this.addCooperateService?.getCooperateByCpf(
        this.formCooperate.get('cpf')?.value
      );
      setTimeout(() => (this.loading = false), 300);
      this.formError = false;

      if (this.cooperate === null) {
        this.resultEmpty = true;
      }
    } else {
      this.cooperate = null;
      setTimeout(() => (this.loading = false), 300);
      this.formError = true;
    }
  }
}
