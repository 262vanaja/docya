import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'booby', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'sai', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'sweety', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'vanu', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'bujji', weight: 10.811, symbol: 'B'},
];
@Component({
  selector: 'app-nursclist',
  templateUrl: './nursclist.component.html',
  styleUrls: ['./nursclist.component.css']
})
export class NursclistComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
