import { 
    Component,
    OnInit
} from '@angular/core'
import { NotesService } from '../services/notes'

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
                *ngFor="let note of notes"
                (noteCardRemoved)="removeNoteCard(note)"
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

export class NotesContainer implements OnInit {
    notes = [];

    private notesService: NotesService;

    constructor(notesService: NotesService) {
        this.notesService = notesService;
    }

    ngOnInit() {
        this.notesService
            .getNotes()
            .subscribe(notes => this.notes = notes.data);
    }

    removeNoteCard(note) { 
        this.notesService
            .completeNote(note)
            .subscribe(note => {
                let index = this.notes.findIndex(localNote => localNote.id === note.id)

                this.notes.splice(index, 1);
            });
    }

    createNote(note) {
        this.notesService
            .createNote(note)
            .subscribe(note => this.notes.push(note));
    }
}