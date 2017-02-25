import { Component } from '@angular/core'

@Component({
    selector: 'notes-container',
    template: 
    `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                <note-creator 
                (noteCreated)="createNote($event)">

                </note-creator>
            </div>
            <div class="notes col-xs-8">
            <div class="row between-xs">
                <note-card
                class="col-xs-4"
                [noteData]="note"
                *ngFor="let note of notes; let i = index"
                (noteCardRemoved)="removeNoteCard(i)"
                >
                </note-card>
            </div>
            </div>
        </div>
    `,
    styles: [
        `
            .notes {
                padding-top: 50px;
            }

            .creator {
                margin-bottom: 40px; 
            }
        `
    ]
})

export class NotesContainer {
    notes = [
        {
            title: 'Eat',
            value: 'Eat something!',
            color: 'white'
        },
        {
            title: 'Sleep',
            value: 'Go to bed!',
            color: 'white'
        },
        {
            title: 'Code',
            value: 'Angular 2!',
            color: 'white'
        }
    ]

    removeNoteCard(i) { 
        this.notes.splice(i, 1);
    }

    createNote(note) {
        this.notes.push(note);
    }
}