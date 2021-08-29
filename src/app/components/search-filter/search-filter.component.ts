import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  cuisineSelectedList: string[] = ['All'];

  constructor(
      public dialogRef: MatDialogRef<SearchFilterComponent>,
      @Inject(MAT_DIALOG_DATA) public data
    ) { }

  ngOnInit(): void {
  }

  close = () => {
    this.dialogRef.close();
  }

  toggle = (item) => {
    if(this.cuisineSelectedList.includes(item)){
      this.cuisineSelectedList.splice(this.cuisineSelectedList.indexOf(item), 1);
    }
    else{
      this.cuisineSelectedList.push(item);
    }

  }
}
