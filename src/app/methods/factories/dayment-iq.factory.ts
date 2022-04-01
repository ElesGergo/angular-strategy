import { BaseMethodStrategy } from '../interfaces/base-method.interface';
import { SelectedMethod } from '../interfaces/every-interface';
import { DaymentIqService } from '../method-implementation/dayment-iq.service';
import { BaseMethodStrategy } from '../interface/base-method.interface';
export class DaymentIqServiceFactory implements DaymentIqServiceFactory {
  isApplicable(method: SelectedMethod) {
    const exampleWithFixedValues = [
      'hardcode_1_example',
      'hardcode_2_example',
      'hardcode_3_example',
    ];
    return exampleWithFixedValues.indexOf(method.name) !== -1 ? true : false;
  }
  get method(): BaseMethodStrategy {
    return DaymentIqService;
  }
}
