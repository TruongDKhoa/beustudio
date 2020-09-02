import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    items: MenuItem[];
    activeItem: MenuItem;

    constructor(
    private router: Router
    ) { }

    ngOnInit(): void {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Man', icon: 'fa fa-male'},
            {label: 'Woman', icon: 'fa fa-female'},
            {label: 'COLLECTION', icon: 'fa fa-shopping-bag'},
        ];
        this.activeItem = this.items[0];
        }

        switch(tab: any) {
        console.log(tab);
    }

    redirectLogin() {
        this.router.navigateByUrl("signin");
    }
}
