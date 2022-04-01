import { FormGroup } from '@angular/forms';
import {
  SuccessResponse,
  ErrorResponse,
  SelectedMethod,
} from './every-interface';

export interface BaseMethodFactory {
  isApplicable: { (selectedMethod: SelectedMethod): boolean };
  method: BaseMethodStrategy;
}

export interface BaseMethodStrategy {
  continue: { (): SuccessResponse | ErrorResponse };
  form: FormGroup;
}
