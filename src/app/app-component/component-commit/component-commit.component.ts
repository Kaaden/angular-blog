import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app-services"
@Component({
    selector: 'app-component-commit',
    templateUrl: './component-commit.component.html',
    styleUrls: ['./component-commit.component.less']
})
export class commitComponent implements OnInit {
    gitId: string = ""
    gitUser: any = ""
    constructor() { }
    ngOnInit() {

    }
}