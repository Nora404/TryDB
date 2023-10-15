import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagComponent } from "./bag/bag.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, BagComponent]
})
export class MenuComponent {

}
