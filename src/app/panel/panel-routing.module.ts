import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../services/user.guard';
import { UserAdmin } from '../services/user.admin';

// COMPONENTES
// COMPONENTE PADRE
import { MainComponent } from './components/main/main.component';
// ACERCA DEL BLOG
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
// ACERCA DE LOS PROYECTOS
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
// ACERCA DE LOS CERTIFICADOS
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';
import { EditCertificateComponent } from './components/edit-certificate/edit-certificate.component';
import { ListCertificateComponent } from './components/list-certificate/list-certificate.component';

const panelRoutes: Routes = [
	{
		path: 'panel',
		component: MainComponent,
		canActivate: [UserGuard],
		children: [
			{ path: '', component: ListComponent },
			{ path: 'listado', component: ListComponent },
			{ path: 'crear', canActivate: [UserAdmin], component: AddComponent },
			{ path: 'editar/:id', canActivate: [UserAdmin], component: EditComponent },
			{ path: 'crear-proyecto', canActivate: [UserAdmin], component: AddProjectComponent },
			{ path: 'proyectos', canActivate: [UserAdmin], component: ListProjectComponent },
			{ path: 'ediar-proyecto/:id', canActivate: [UserAdmin], component: EditProjectComponent },
			{ path: 'crear-certificado', canActivate: [UserAdmin], component: AddCertificateComponent },
			{ path: 'editar-certificado/id', canActivate: [UserAdmin], component: EditCertificateComponent },
			{ path: 'certificados', canActivate: [UserAdmin], component: ListCertificateComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(panelRoutes)
	],
	exports: [
		RouterModule
	]	
})

export class PanelRoutingModule { }
