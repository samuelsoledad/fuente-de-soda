import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/products/product-page/product-page.component';
import path from 'path';
import { ProductAddPageComponent } from './pages/products/product-add-page/product-add-page.component';
import { ProductEditPageComponent } from './pages/products/product-edit-page/product-edit-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    {
    path: '',
    children: [
        {
            path: '',
            component: HomePageComponent,
            },
        {
        path: 'Home',
        component: HomePageComponent,
        },
            {
                path: 'products',
                children:
                [
                {
                    path: '',
                    component: ProductPageComponent
                },
                {
                    path: 'add',
                    component: ProductAddPageComponent
                },
                {
                    path: 'edit',
                    component: ProductEditPageComponent
                },
                ]
            }
        ],
    },
];
