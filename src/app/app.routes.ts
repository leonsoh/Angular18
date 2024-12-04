import { Routes } from '@angular/router';
import { CreateRulesComponent } from './components/create-rules/create-rules.component';
import { HomeComponent } from './components/home/home.component';
import { EditRulesComponent } from './components/edit-rules/edit-rules.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },

    {
        path: 'create-rules',
        component: CreateRulesComponent
    },

    {
        path: 'edit-rules',
        component: EditRulesComponent,
    }
];
