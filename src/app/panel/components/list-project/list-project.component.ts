import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Dev } from '../../../models/dev';
import { UserService } from '../../../services/user.service';
import { DevService } from '../../../services/dev.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  providers: [UserService, DevService]
})
export class ListProjectComponent implements OnInit {
	public page_title: string;
	public devs: Array<Dev>;
	public identity;
	public token;
	public status;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _devService: DevService
	){
		this.page_title = 'Mis proyectos realizados';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
	}

	ngOnInit(): void {
		this.getDevs();
	}

	getDevs(){
		this._devService.getDevs().subscribe(
			response =>{
				if(response.devs){
					this.devs = response.devs;
				}
			},
			error => {
				console.log(error);
			}	
		);
	}

	deleteDev(id){
		this._devService.delete(this.token, id).subscribe(
			response => {
				this.getDevs();
			},
			error => {
				console.log(error);
				this.status = 'error';
			}
		);
	}
}
