// IMPORTAR LOS MODULOS DEL ROUTER
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './services/user.guard';
import { NoIdentityGuard } from './services/no.identity.guard';
import { UserAdmin } from './services/user.admin';

// IMPORTAS COMPONENTES
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { CertificateDetailComponent } from './components/certificate-detail/certificate-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

// ARRAY DE RUTAS
const appRoutes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'inicio', component: HomeComponent },
	{path: 'login', canActivate: [NoIdentityGuard], component: LoginComponent },
	{path: 'registro', canActivate: [NoIdentityGuard], component: RegisterComponent },
	{path: 'ajustes', canActivate: [UserGuard], component: UserEditComponent },
	{path: 'temas', component: TopicsComponent },
	{path: 'temas/:page', component: TopicsComponent },
	{path: 'tema/:id', component: TopicDetailComponent },
	{path: 'usuarios', component: UsersComponent },
	{path: 'perfil/:id', component: ProfileComponent },
	{path: 'acerca-de-mi', component: InfoPersonalComponent },
	{path: 'certificados', component: CertificatesComponent },
	{path: 'certificado/:id', component: CertificateDetailComponent },
	{path: 'proyectos', component: ProjectsComponent },
	{path: 'proyecto/:id', component: ProjectDetailComponent },
	{path: '**', component: HomeComponent }
];

// EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
