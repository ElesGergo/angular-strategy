import { Injectable, Injector } from '@angular/core';
import { SelectedMethod } from '../interfaces/every-interface';
import { DaymentIqServiceFactory } from './dayment-iq.factory';

@Injectable()
export class FactoryFacade {
  constructor(private http: HttpClient) {}
  private factories = [new DaymentIqServiceFactory()];

  getMethodClass(method: SelectedMethod) {
    const method;
    const injector = Injector.create({
      providers: [{ provide: Square, deps: [http] }],
    });
    console.log(method);
    return this.factories.find((factory) => factory.isApplicable(method));
  }
}
