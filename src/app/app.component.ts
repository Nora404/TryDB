import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayerEditorComponent } from "./playerEditor/editor/editor.component";
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormsModule, PlayerEditorComponent, MapComponent, MenuComponent]
})
export class AppComponent{
  title = 'TryDB';

}
