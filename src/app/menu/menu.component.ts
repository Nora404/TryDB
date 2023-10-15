import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagComponent } from "./bag/bag.component";
import { WorldComponent } from "./world/world.component";
import { BookComponent } from "./book/book.component";
import { CharaComponent } from "./chara/chara.component";
import { CraftComponent } from "./craft/craft.component";
import { QuestComponent } from "./quest/quest.component";
import { SettingComponent } from "./setting/setting.component";
import { StatsComponent } from "./stats/stats.component";
import { SkillComponent } from "./skill/skill.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, BagComponent, WorldComponent, BookComponent, CharaComponent, CraftComponent, QuestComponent, SettingComponent, StatsComponent, SkillComponent]
})
export class MenuComponent {

  bag: boolean = false;
  book: boolean = false;
  chara: boolean = true;
  craft: boolean = false;
  quest: boolean = false;
  setting: boolean = false;
  skill: boolean = false;
  stats: boolean = false;
  world: boolean = false;

  setActiveMenu(menu: string){
    this.bag = menu === 'bag';
    this.book = menu === 'book';
    this.chara = menu === 'chara';
    this.craft = menu === 'craft';
    this.quest = menu === 'quest';
    this.setting = menu === 'setting';
    this.skill = menu === 'skill';
    this.stats = menu === 'stats';
    this.world = menu === 'world';
  }

}
