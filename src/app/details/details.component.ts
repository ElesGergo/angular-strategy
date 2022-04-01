import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactoryFacade } from '../methods/factories';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [{ provide: FactoryFacade, deps: [HttpClient] }],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private factoryFacade: FactoryFacade
  ) {}

  ngOnInit() {
    const selectedMethod = JSON.parse(this.route.snapshot.params.data);
    console.log(this.factoryFacade.getMethodClass(selectedMethod));
    /*    from(methodTypes).pipe(
      find((methodType: MethodStrategyBase) => methodType.isApplicable(name))
    ); */

    console.log();
  }
}
