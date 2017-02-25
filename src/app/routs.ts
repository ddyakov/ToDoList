import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { MainContainer, AboutContainer } from './containers'

export const routs : ModuleWithProviders
     = RouterModule.forRoot([
         {
            path: '',
            component: MainContainer
         },
         
         {
            path : 'about',
            component: AboutContainer
         },
         {
            path: '**',
            redirectTo: ''
         },
     ])