import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDBService } from 'src/db/userDB.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playerEditor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class PlayerEditorComponent implements OnInit{
  isfirstVisit = true;

  playerName = 'Nobody';
  playerRace = 'Mensch';
  playerJob = 'Bewohner';

  constructor(private db: UserDBService){}

  ngOnInit(): void {
    this.db.checkIfPlayerExists()
      .then((result)=>{
        this.isfirstVisit = result;
      });

    if(!this.isfirstVisit){
      this.playerName = this.db.playerStats().name;
    }  

    this.db.playerStats().name;
  }

  addNewPlayer(){
    this.db.createNewPlayer(this.playerName, this.playerRace, this.playerJob)
  }
  

  kill(){
    this.db.killPlayer();
  }

  test(){
    this.db.checkIfPlayerExists()
      .then((result)=>{
        this.isfirstVisit = result;
        });

    this.db.test();
  }
}
