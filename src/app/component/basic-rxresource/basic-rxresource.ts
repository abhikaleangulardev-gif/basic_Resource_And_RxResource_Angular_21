import { Component, effect } from '@angular/core';
import { Rxresource } from '../../service/rxresource';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-rxresource',
  imports: [CommonModule],
  templateUrl: './basic-rxresource.html',
  styleUrl: './basic-rxresource.css',
})
export class BasicRxresource {
  myProductList: any;

  constructor(private rxResourceService: Rxresource) {
    this.myProductList = this.rxResourceService.myRxResourceProductList;

    effect(() => {
      if (this.myProductList.status() === 'resolved') {
        console.log(this.myProductList.value());
      }

      if (this.myProductList.status() === 'error') {
        console.log(this.myProductList.error());
      }
    });
  }
}
