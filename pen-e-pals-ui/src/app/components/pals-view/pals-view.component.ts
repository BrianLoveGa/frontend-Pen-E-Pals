import { Component, OnInit } from '@angular/core';
import { PalsService } from '../../services/pals.service';

@Component({
  selector: 'app-pals-view',
  templateUrl: './pals-view.component.html',
  styleUrls: ['./pals-view.component.css'],
})
export class PalsViewComponent implements OnInit {
  public pals;

  constructor(private palsService: PalsService) {}

  ngOnInit(): void {
    this.getPals();
  }

  getPals() {
    this.palsService.getPals().subscribe(
      (data) => {
        this.pals = data;
      },
      (err) => console.error(err),
      () => console.log('pals provided')
    );
  }
}
