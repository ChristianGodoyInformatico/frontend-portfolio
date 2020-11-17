import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { MomentModule } from 'angular2-moment';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PanelModule } from './panel/panel.module';
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';
import { NoIdentityGuard } from './services/no.identity.guard';
import { UserAdmin } from './services/user.admin';
import { CertificateService } from './services/certificate.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { CertificateDetailComponent } from './components/certificate-detail/certificate-detail.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
    TopicsComponent,
    TopicDetailComponent,
    UsersComponent,
    ProfileComponent,
    SearchComponent,
    InfoPersonalComponent,
    ProjectsComponent,
    CertificatesComponent,
    CertificateDetailComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AngularFileUploaderModule,
    PanelModule,
    MomentModule,
    PdfViewerModule
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard,
    NoIdentityGuard,
    UserAdmin,
    CertificateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
