import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserDBService } from 'src/db/userDB.service';
import { FormsModule } from '@angular/forms';
import { PlayerEditorComponent } from "./playerEditor/editor/editor.component";
import { MapEditorComponent } from "./mapEditor/editor/editor.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormsModule, PlayerEditorComponent, MapEditorComponent]
})
export class AppComponent{
  title = 'TryDB';

}
