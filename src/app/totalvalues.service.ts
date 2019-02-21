import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalvaluesService {
 
  constructor() { }

  getTotalValue(selectedItems) {
    let totalAmount =0;
    let totalCount =0;
    selectedItems.map((item) => {
      totalAmount += item.totalAmount;
      totalCount  += item.count;
    });
    return [totalAmount,totalCount]
  }
}
