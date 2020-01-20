import {Component, OnInit} from '@angular/core';
import {DecreetService} from '../../services/decreet.service';

@Component({
  selector: 'decreet',
  templateUrl: './decreet.component.html',
  styleUrls: ['./decreet.component.css']
})
export class DecreetComponent implements OnInit {

  headers: string[] = [];
  dataResult: any[] = [];

  constructor(private decreetService: DecreetService) {
  }

  ngOnInit() {
    this.decreetService.getLastFiveDecreten().subscribe((result) => {
      this.headers = result.head.vars;
      this.dataResult = result.results.bindings;
    });
  }

  unescapeString(str: string) {
    console.log(decodeURI(str));
    return decodeURI(str);
  }

}
