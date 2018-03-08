import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list-view',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    @Input() name = 'name';
    @Input() createdDate = 'createdDate';
    @Input() updatedDate = 'updatedDate';
    @Input() other1 = 'other1';
    constructor() { }
    ngOnInit() { }
}
