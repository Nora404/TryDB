export interface Action{
    id: number;         // id dieser action
    event: number;      // id des events zudem diese action gehört
    header: string;     // Überschrift die angezeigt wird
    text: string;       // Text der action, eine Bescheibung oder ein Gespräch
    icon: string;       // Name des Icons dieser action
    path: string;       // Name des Ordners wo das icon liegt z.B uiIcon
    action: Array<{ button: string, actionID: number }>; // mögliche Buttons und mit welcher action sie verknüpft sind
}

export const EmptyAction: Action = {
    id: 0,
    event: 0,
    header: "",
    text: "",
    icon: "",
    path: "",
    action: []
}

export const eventActions: Action[] = [
    {
        id: 1,
        event: 1,
        header: "Du schaust den Bauer an",
        text: "Vor dir steht ein Mann im mittlerem Alter mit robusten Kleider. Er lächelt dich erwartungsvoll an.",
        icon: "chara",
        path: "uiIcon",
        action: [{button: 'zurück', actionID: 0}]
    },
    {
        id: 2,
        event: 1,
        header: "Bauer:",
        text: "Hallo! Wie schön das du endlich angekommen bist!",
        icon: "chara",
        path: "uiIcon",
        action: [{button: 'zurück', actionID: 0}, {button: 'Hallo', actionID: 3}]
    },
    {
        id: 3,
        event: 1,
        header: "Bauer:",
        text: "Jetzt kann ja dein Abendteuer starten, ich habe auch schon eine Aufgabe für dich!",
        icon: "chara",
        path: "uiIcon",
        action: [{button: 'Ablehnen', actionID: 0}, {button: 'Was denn?', actionID: 0}]
    },
    {
        id: 4,
        event: 2,
        header: "Du schaust die Bäuerin an",
        text: "Eine schlanke Frau in einfachen Kleidern steht vor dir. Sie schaut dich missmutig an, während sie einen Topf mit einem Stoffrest säubert",
        icon: "chara",
        path: "uiIcon",
        action: [{button: 'zurück', actionID: 0}]
    },
    {
        id: 5,
        event: 2,
        header: "Bäuerin:",
        text: "Störe mich nicht bei meiner Arbeit!",
        icon: "chara",
        path: "uiIcon",
        action: [{button: 'zurück', actionID: 0}]
    }
]