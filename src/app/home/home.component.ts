import { Component, OnInit } from '@angular/core';
import * as items from '../../../foodItems';
import { Router } from '@angular/router';
import { TotalvaluesService } from '../totalvalues.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 items;
 southItems;
 northItems;
 totalCount =0;
 totalAmount =0;
 selectedItems = [];
  constructor(public router: Router, private totalValues: TotalvaluesService) {
   }

  ngOnInit() {
    this.getDetails();
  }
  btnClick() {
    localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
    this.router.navigate(['/order']);
  }

  itemsSelected(item){
    const selectedItems = this.selectedItems.filter(selItem => {
      return selItem.name === item.name;
    });
    this.checkForSelectedItem(selectedItems,item);
    [this.totalAmount , this.totalCount] = this.totalValues.getTotalValue(this.selectedItems);
  }
  checkForSelectedItem(selectedItems,item){
    selectedItems.length === 0 ? this.newItem(item) : this.existingItem(item)
  }
  newItem(item){
    const selectedItem = {...item};
    selectedItem.count = 1;
    selectedItem.totalAmount = selectedItem.count * selectedItem.price;
    this.selectedItems.push(selectedItem);
  }
  existingItem(item){
    this.selectedItems.map(selItem => {
      if (selItem.name === item.name ) {
        selItem.totalAmount = (selItem.count+1) * selItem.price;
        return selItem.count++;
      }
    });
  }
  increaseItem(item, index) {
    this.selectedItems[index].count ++;
    this.selectedItems[index].totalAmount = this.selectedItems[index].count * this.selectedItems[index].price;
    [this.totalAmount , this.totalCount] = this.totalValues.getTotalValue(this.selectedItems);
  }
  decreaseItem(item, index) {
    if ( item.count === 1) {
      this.selectedItems.splice(index, 1);
      // [this.totalAmount , this.totalCount] = this.totalValues.getTotalValue(this.selectedItems);
      return true;
    }
    this.selectedItems[index].count --;
    this.selectedItems[index].totalAmount = this.selectedItems[index].count * this.selectedItems[index].price;
    [this.totalAmount , this.totalCount] = this.totalValues.getTotalValue(this.selectedItems);
  }
  getDetails() {
    this.southItems = items.default.southItems;
    this.northItems = items.default.northItems;
  }
}