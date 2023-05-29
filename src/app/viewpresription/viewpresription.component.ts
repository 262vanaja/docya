import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  ID: number;
  MedicalName:string;
  Dosage: string;
  Notes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, MedicalName: 'dolo',Dosage: '1-0-1',Notes: 'fever'},
  {ID: 2, MedicalName: 'Lisinopril',Dosage: '1-0-2',Notes: 'None'},
  {ID: 3, MedicalName: 'Atorvastatin',Dosage: '0-0-1',Notes: 'None'},
  {ID: 4, MedicalName: 'Omeprazole',Dosage: '1-1-1',Notes: 'None'},
  {ID: 5, MedicalName: 'Amlodipine',Dosage: '1-0-0',Notes: 'None'},
  {ID: 6, MedicalName: 'vit c',Dosage: '1-1-1',Notes: 'None'},
  
];
@Component({
  selector: 'app-viewpresription',
  templateUrl: './viewpresription.component.html',
  styleUrls: ['./viewpresription.component.css']
})
export class ViewpresriptionComponent {
  
  displayedColumns: string[] = ['ID', 'MedicalName','Dosage', 'Notes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}
