import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  //BE return a list methods which can be grouped based on any kind of logic with isApplicable
  methods = [
    { name: 'hardcode_1_example' },
    { name: 'hardcode_2_example' },
    { name: 'hardcode_3_example' },
    { name: 'somemethod', type: 'base_method_group' },
    { name: 'group_example', gourp: 'isOnlineIps' },
    { name: 'flag_example', someFlag: true },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  //I use the url for transfering state
  //just because it is fast it can be whatever
  select(selected) {
    this.router.navigate(['/details', JSON.stringify(selected)]);
  }
}
