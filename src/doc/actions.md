### Actions

Der Spieler interagiert mit dem Spiel über Actions. Ereignisse besitzten verschiedene Actions, sie sind ein Container für diese. 

```typescript
export interface Action {
    id: number;         // id dieser action
    event: number;      // id des events zudem diese action gehört
    header: string;     // Überschrift die angezeigt wird
    text: string;       // Text der action, eine Bescheibung oder ein Gespräch
    icon: string;       // Name des Icons dieser action
    path: string;       // Name des Ordners wo das icon liegt z.B uiIcon
    color: number[];    // Farbe des Hintergundes
    action: Array<{ button: string, actionID: number }>; 
    // mögliche Buttons und mit welcher action sie verknüpft sind
    ifWhen: ???;         // Vorbedingung
    trigger: ???;        // Was löst die Action aus?
    wasActivated: boolen // Wenn Action aktiviert wurde dan true
}
```

- Eine Action kann beendet werden (actionID = 0)
- Eine Action kann eine weitere Action auslösen (z.B Dialog)
- Eine Action kann einen Wert verändern (Items, Quests)
- Eine Action kann eine Vorbedingung haben (Zustand des Spiels)
- Eine Action kann eine Gameplay-Meschanik auslösen (Kampf, Handwerk)

<hr>

#### Vorbedingungen

Es muss also einen Zustand des Spieles geben, der abgefragt werden kann.
Vorbedingungen können sein:

- Item im Inventar vorhanden
- Eine andere Action wurde ausgeführt (action.wasActivated)
- Eine andere Quest wurde ausgeführt (quest.wasActivated)
- Eine bestimmte Fähigkeit hat einen bestimmten Wert

Es wird immer ein Wert aus einer Tabelle abgefragt.   

**tabel** = Name der Tabelle wie `actions` | `items` | `quests` | `player`  
**itemID** = ID des konkreten Gegenstandes, eine Nummer  
**prov** = Eigenschaft des Gegenstandes der abgefragt werden soll  
**value** = Wert der Eigenschaft welche die Bedingung erfüllt

```typescript
ifWhen: Array<{tabel: string, itemID: number, prov: string, value: any}>
```
Beispiele:  
```typescript
// Eine bestimmte Action wurde bereits getriggert
{tabel: 'action', itemID: 7, prov: 'wasActivated', value: true}
// Ein bestimmter Gegenstand befindet sich 5 mal im Inventar
{tabel: 'items', itemID: 122, prov: 'own', value: 5}
// Eine bestimmte Fähigkeit hat das Level 10 erreicht
{tabel: 'skill', itemID: 34, prov: 'level', value: 10}
```

<hr>

#### Auslösen - Interaktion

Ein Ereignis hat eine Eigenschaft die action heißt. Der Wert ist ein Array mit Objekten die alle zugehörigen actions beinhalten. 

```typescript
action: [{ button: 'anschauen', actionID: 4 }, { button: 'ansprechen', actionID: 5 }],
```
Wird ein button aktiviert (Eigene Komponente, die je eine action im Template darstellt), so sendet das Ereignis die actionID per EventEmitter zur Elternkomponente. Diese halt die ID in einem BehaviorSubjekt um es der Map Komponente weiter zu leiten. Der Dialog befindet sich in der Map Komponente. Es könnte sinnvoll sein dies später aus der Map Komponente heraus zu nehmen und direkt in oberster Ebene einzubinden.  
Die Id wird zur Funktion `executeAction(id: number)` geschickt. Diese sendet alle Informationen an BehaviorSubjects die ihre Werte als Observabel zum Template schickt. Dort werden die Informationen an die Dialog-Komponente geschickt

```html
<app-event-dialog
  [icon]="(icon$ | async) ?? ''"
  [color]="(color$ | async) ?? []"
  [header]="(header$ | async) ?? ''"
  [text]="(text$ | async) ?? ''"
  [path]="(path$ | async) ?? ''"
  [btn]="(btn$ | async) ?? []"
  (actionID)="executeAction($event)"
></app-event-dialog>
```

Auch der Dialog hat Buttons, hier kann der Spieler auf die Dialoge reagieren. Wie bei den Ereignissen wird die ID der nachfolgenden action an die Elternkomponente zur Funktion `executeAction(id: number)` geschickt. Hat die ID den Wert `0` so wird der Dialog zurück gesetzt und beschreibt wieder nur das aktuelle Biom.