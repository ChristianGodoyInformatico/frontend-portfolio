// MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelRoutingModule } from './panel-routing.module';
import { MomentModule } from 'angular2-moment';

// COMPONENTES
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

// SERVICIOS
import { UserService } from '../services/user.service';
import { UserGuard } from '../services/user.guard';
import { UserAdmin } from '../services/user.admin';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';
import { EditCertificateComponent } from './components/edit-certificate/edit-certificate.component';
import { ListCertificateComponent } from './components/list-certificate/list-certificate.component';
import { ListProjectComponent } from './components/list-project/list-project.component';

// NgModule
@NgModule({
	declarations: [
		MainComponent,
		ListComponent,
		AddComponent,
		EditComponent,
		AddProjectComponent,
		EditProjectComponent,
		AddCertificateComponent,
		EditCertificateComponent,
		ListCertificateComponent,
		ListProjectComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		PanelRoutingModule,
		MomentModule
	],
	exports: [
		MainComponent,
		ListComponent,
		AddComponent,
		EditComponent
	],
	providers: [
		UserService,
		UserGuard,
		UserAdmin
	]
})

export class PanelModule {}