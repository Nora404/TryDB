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

Es muss also einen Zustand des Spieles geben, der abgefragt werden kann.
Vorbedingungen können sein:

- Item im Inventar vorhanden
- Eine andere Action wurde ausgeführt (action.wasActivated)
- Eine andere Quest wurde ausgeführt (quest.wasActivated)
- Eine bestimmte Fähigkeit hat einen bestimmten Wert

heißt, die funktion gibt einen boolean aus
Es wird immer ein Wert abgefragt