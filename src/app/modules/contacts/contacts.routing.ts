import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllContactsComponent } from './pages/all-contacts/all-contacts.component';
import { ImportContactsComponent } from './pages/import-contacts/import-contacts.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AllContactsComponent,
            },
            {
                path: 'import',
                component: ImportContactsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactsRoutingModule { }