import { FormGroup } from '@angular/forms';
import {
  ErrorResponse,
  SelectedMethod,
  SuccessResponse,
} from './every-interface';

export interface DaymentIqMethodFactory {
  isApplicable: { (selectedMethod: SelectedMethod): boolean };
  method: DaymentIqMethodStrategy;
}

export interface DaymentIqMethodStrategy {
  continue: { (): SuccessResponse | ErrorResponse };
  form: FormGroup;
}
