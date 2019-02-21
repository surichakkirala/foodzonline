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
    const selectedItems = this.selectedItems.filter(selItem => {
      return selItem.name === item.name;
    });
    this.checkForSelectedItem(selectedItems,item);
  }
  checkForSelectedItem(selectedItems,item){
    selectedItems.length === 0 ? this.newItem(item) : this.existingItem(item)
  }
  newItem(item){
    const selectedItem = {...item};
    selectedItem.count = 1;
    selectedItem.totalAmount = selectedItem.count * selectedItem.price;
    this.selectedItems.push(selectedItem);
    this.selectedCourse.emit(this.selectedItems);
  }
  existingItem(item){
    this.selectedItems.map(selItem => {
      if (selItem.name === item.name ) {
        selItem.totalAmount = (selItem.count+1) * selItem.price;
        return selItem.count++;
      }
    });
    this.selectedCourse.emit(this.selectedItems);
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
