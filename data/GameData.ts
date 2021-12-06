import { Answer } from "../models/Answer";

export let GameAnswer: Answer[] = [];

export function InitGameData() {
    Answer.findAll().then((data: Answer[]) => {
        GameAnswer = data;
        console.log(JSON.stringify(GameAnswer));
    }).catch(err => {
        console.log(JSON.stringify(err))
    });
}