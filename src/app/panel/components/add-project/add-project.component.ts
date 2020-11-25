import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Dev } from '../../../models/dev';
import { UserService } from '../../../services/user.service';
import { DevService } from '../../../services/dev.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [UserService, DevService]
})
export class AddProjectComponent implements OnInit {
	public page_title: string;
	public dev: Dev;
	public identity;
	public token;
	public status;
	public is_edit;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _devService: DevService
	){
		this.page_title = 'Subir nuevo proyecto';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.dev = new Dev('', '', '', '', null, '');
		this.is_edit = false;
	}

	ngOnInit(): void {
	}

	onSubmit(form){
		this._devService.addDev(this.token, this.dev).subscribe(
			response => {
				if(response.dev){
					this.status = 'success';
					this.dev = response.dev;
					this._router.navigate(['/panel/proyectos']);
				}else{
					this.status = 'error';
				}
			},
			error => {
				console.log(error);
				this.status = 'error';
			}
		);
	}
}
