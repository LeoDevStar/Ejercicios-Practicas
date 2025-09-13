import { Routes } from '@angular/router';
import {List} from './list/list';

export const routes: Routes = [
    {
        path: '',
        component: List
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
