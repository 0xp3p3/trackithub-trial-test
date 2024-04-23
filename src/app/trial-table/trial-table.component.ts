import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-trial-table',
    templateUrl: './trial-table.component.html',
    styleUrls: ['./trial-table.component.css']
})
export class TrialTableComponent implements AfterViewInit {
    searchKey: string = "";
    @ViewChild('textInput') textInputRef!: ElementRef; // Reference to the input element

    clearFilter(inputElement: any) {
        this.searchKey = "";
        console.log(inputElement);
        inputElement.value = ""; // Clear the input field value
        inputElement.focus();    // Focus back on the input field
    }
    
    applyFilter(e: any) {
        this.searchKey = e.target.value;
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    myDataArray = [
        {
            "League": "Test League111",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Robert Sudduth",
            "PaymentDate": "03/26/2024",
            "Paid": 1.00,
            "Comp": 0.10
        }, {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Robert Sudduth",
            "PaymentDate": "03/26/2024",
            "Paid": 1.00,
            "Comp": 0.10
        }, {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.00,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Travis Kruse",
            "PaymentDate": "01/02/2024",
            "Paid": 1.02,
            "Comp": 0.20
        },
        {
            "League": "Test League",
            "Player": "Robert Sudduth",
            "PaymentDate": "03/26/2024",
            "Paid": 1.01,
            "Comp": 0.10
        }
    ]

    dataSource = new MatTableDataSource(this.myDataArray);
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

}
