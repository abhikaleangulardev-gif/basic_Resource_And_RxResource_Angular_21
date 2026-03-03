import { Component, effect, OnInit } from '@angular/core';
import { Resource } from '../../service/resource';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-resource',
  imports: [CommonModule],
  templateUrl: './basic-resource.html',
  styleUrl: './basic-resource.css',
})
export class BasicResource implements OnInit {
  myProductList: any;
  constructor(private resourceservice: Resource) {
    effect(() => {
      if (this.myProductList.status() === 'resolved') {
        console.log(this.myProductList.value());
      }

      if (this.myProductList.status() === 'error') {
        console.log(this.myProductList.error());
      }
    })
  }


  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.myProductList = this.resourceservice.myResourceProductList;
  }
}
