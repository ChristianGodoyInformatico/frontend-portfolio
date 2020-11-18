import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Dev } from '../../models/dev';
import { DevService } from '../../services/dev.service';
import { global } from '../../services/global';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [DevService]
})
export class ProjectDetailComponent implements OnInit {
	public dev: Dev;
	public url;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _devService: DevService
	){
		this.url = global.url;
	}

	ngOnInit(): void {
		this._route.params.subscribe(params => {
			var id = params['id'];

			this.getDev(id);
		});
	}

	getDev(id){
		this._devService.getDev(id).subscribe(
			response => {
				if(response.dev){
					this.dev = response.dev;
				}
			},
			error => {
				console.log(error);
			}
		);
	}

}
