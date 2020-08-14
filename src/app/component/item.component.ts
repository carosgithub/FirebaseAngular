import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-items',
  template: `
    <div>
      Laura
    </div>
  `,
})
export class ItemComponent {
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subcribe((item) => {
      console.log(item);
    });
  }
}
