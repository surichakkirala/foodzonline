import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from './types';
import { TotalvaluesService } from '../totalvalues.service';
@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  @Input() 
  menuTitle;
  @Input() 
  menuItems;
  selectedItems =[]
  totalCount;
  totalAmount;
 @Output () selectedCourse = new EventEmitter();
  constructor(private totalValues: TotalvaluesService) {
   }
  
  ngOnInit() {
  }
  
  addItem(item){
    this.selectedCourse.emit(item);
  }
  removeItem(item) {
    let index = 0;
    const selectedItems = this.selectedItems.filter((selItem, i) => {
      if (selItem.name === item.name) {
        index = i;
        return true;
      }
      });
      if (selectedItems.length > 0) {
        if (this.checkForZeroCount(selectedItems, index)) {
          return true;
        }
        const selectedItem = {...item};
        selectedItem.count = selectedItems[0].count - 1;
        selectedItem.totalAmount = selectedItem.count * selectedItem.price;
        this.selectedItems[index] = selectedItem;
      }
      this.selectedCourse.emit(this.selectedItems);
  }
  checkForZeroCount(selectedItems , index) {
    if ( selectedItems[0].count === 1) {
      this.selectedItems.splice(index, 1);
      return true;
    }
    return false;
  }
}
