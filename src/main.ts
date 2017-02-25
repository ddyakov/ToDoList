import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app/app'
import { MainContainer, NotesContainer } from './app/containers' 
import { Navbar, NoteCard, NoteCreator  } from './app/ui'

@NgModule({
    declarations: [
        App,
        MainContainer,
        Navbar,
        NoteCard,
        NotesContainer,
        NoteCreator
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [App]
})

export class Main { }

platformBrowserDynamic().bootstrapModule(Main)