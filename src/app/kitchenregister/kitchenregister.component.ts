import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../models/kitchen';
import { KitchenService } from '../services/kitchen.service';

@Component({
  selector: 'app-kitchenregister',
  templateUrl: './kitchenregister.component.html',
  styleUrls: ['./kitchenregister.component.css'],
})
export class KitchenregisterComponent implements OnInit {
  constructor(private kitchenService: KitchenService) {}

  public kitModel = new Kitchen(); // two-way binding with ngForm

  ngOnInit(): void {}
}
