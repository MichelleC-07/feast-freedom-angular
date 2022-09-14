import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  constructor(public kitchenService: KitchenService) {}

  ngOnInit(): void {
    this.kitchenService.getAllKitchen().subscribe({
      next: (data: any) => {
        this.kitchenService.kitchenData = data;
      },
      error: () => {
        alert('No kitchen to show');
      },
    });
  }

  viewKitchen(id: number) {
    this.kitchenService.getOneKitchen(id).subscribe({
      next: (data: any) => {
        this.kitchenService.viewRow(data);
      },
      error: () => {
        alert('No kitchen detail show');
      },
    });
  }
}
