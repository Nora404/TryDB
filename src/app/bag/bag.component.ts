import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player, db } from 'src/db/db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent {
  @Input() player!: Player;

  playerItems$ = liveQuery(()=>this.listPlayerItems());

  async listPlayerItems(){
    return await db.items_DB
      .where({
        playerId: this.player.id,
      })
      .toArray()
  }
}
