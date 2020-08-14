import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-items',
  template: `
    <div>
      test
    </div>
  `,
})
export class ItemComponent {
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().pipe().subscribe(console.log);
  }
}
