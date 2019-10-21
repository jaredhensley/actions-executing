import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: 'single',
                    pathMatch: 'full'
                },
                {
                    path: 'single',
                    loadChildren: () => import('./examples/single/single.module').then((m) => m.FirstModule)
                },
                {
                    path: 'multiple',
                    loadChildren: () => import('./examples/multiple/multiple.module').then((m) => m.SecondModule)
                }
            ]
        ),
        NgxsModule.forRoot([], {
            developmentMode: !environment.production
        }),
        NgxsLoggerPluginModule.forRoot(),
        NgxsActionsExecutingModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
