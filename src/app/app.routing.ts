// IMPORTAR LOS MODULOS DEL ROUTER
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAS COMPONENTES
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component'; 

// ARRAY DE RUTAS
const appRoutes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'inicio', component: HomeComponent },
	{path: 'login', component: LoginComponent },
	{path: 'registro', component: RegisterComponent },
	{path: 'ajustes', component: UserEditComponent },
	{path: 'temas', component: TopicsComponent },
	{path: 'temas/:page', component: TopicsComponent },
	{path: '**', component: LoginComponent }
];

// EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
