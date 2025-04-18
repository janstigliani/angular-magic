import { Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },

    {
        path: "details/:id",
        component: DetailComponent,
    }
];
