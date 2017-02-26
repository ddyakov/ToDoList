import { Component } from '@angular/core'

@Component({
    selector: 'about',
    template: 
    `
        <div class="row center-xs about">
            <div class="about-content shadow-2 col-xs-6">
                <span class="title">This is a pretty simple ToDo list application built-up with Angular 2.0.</span>
            </div>
        </div>
    `,
    styles: [
        `
           .about-content {
                padding: 20px;
                background-color: white;
                border-radius: 3px;
                margin-bottom: 40px;
            }

            .title {
                font-weight: bold;
                color: #B0B0B0;
            }

            .about {
                padding-top: 50px;
            }
        `
    ]
})

export class AboutContainer { }