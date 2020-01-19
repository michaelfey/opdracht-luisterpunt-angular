import { Component, OnInit } from '@angular/core';
import {DecreetService} from "../../services/decreet.service";

@Component({
  selector: 'decreet',
  templateUrl: './decreet.component.html',
  styleUrls: ['./decreet.component.css']
})
export class DecreetComponent implements OnInit {

  headers: string[] = [];
  dataResult: any[] = [];

  constructor(private decreetService: DecreetService) { }

  ngOnInit() {
    this.decreetService.getLastFiveDecreten().subscribe((result) => {
      //console.log(result);
      this.headers = result.head.vars;
      this.dataResult = result.results.bindings;
    });
  }

}
