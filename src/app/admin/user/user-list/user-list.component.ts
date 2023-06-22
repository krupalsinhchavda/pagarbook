import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'username', 'name', 'email', 'role', 'created', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  add() {
    this.dialog.open(AddEditUserComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditUserComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewUserComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteUserComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  username: string;
  name: string;
  email: string;
  role: string;
  created: string;
  status: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, username: 'MarkJohn', name: 'mark', email: 'markjohn@gmail.com', role: 'devloper', created: '03-11-2021 14:47', status: 'active', action: 0 },
  { position: 2, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'deactive', action: 0 },
  { position: 3, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'deactive', action: 0 },
  { position: 4, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'deactive', action: 0 },
  { position: 5, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'active', action: 0 },
  { position: 6, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'deactive', action: 0 },
  { position: 7, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'active', action: 0 },
  { position: 8, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'deactive', action: 0 },
  { position: 9, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'deactive', action: 0 },
  { position: 10, username: 'jecsonCarl', name: 'mark', email: 'jecson@gmail.com', role: 'designer', created: '03-11-2021 14:47', status: 'active', action: 0 }

];