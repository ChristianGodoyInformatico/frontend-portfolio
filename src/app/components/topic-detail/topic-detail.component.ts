import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic.service';
import { UserService } from '../../services/user.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import { global } from '../../services/global';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
  providers:[TopicService, UserService, CommentService]
})
export class TopicDetailComponent implements OnInit {
	public topic: Topic;
	public comment: Comment;
	public identity;
	public token;
	public status;
	public url;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _topicService: TopicService,
		private _userService: UserService,
		private _commentService: CommentService
	) {
		this.token = null;
		this.identity = null;
		this.url = global.url;
	}

	ngOnInit(): void {
		this.getTopic();
		this.getIdentityAndToken();

		if(this.identity != null){
			this.generateComment();
		}
	}

	
	getIdentityAndToken(){
		let identity = this._userService.getIdentity();
		let token = this._userService.getToken();

		if(identity){
			this.identity = identity;
			this.token = token;
		}else{
			this.identity = null;
			this.token = null;
		}
	}

	getTopic(){
		this._route.params.subscribe(params => {
			let id = params['id'];

			this._topicService.getTopic(id).subscribe(
				response => {
					if(response.topic){
						this.topic = response.topic;
					}else{
						this._router.navigate(['/inicio']);
					}
				},
				error => {
					console.log(error);
				}
			);
		});
	}

	generateComment(){
		this.comment = new Comment('', '', '', this.identity._id);
	}


	onSubmit(form){
		this._commentService.add(this.token, this.comment, this.topic._id).subscribe(
			response => {
				if(!response.topic){
					this.status = 'error';
					}else{
						this.status = 'success';
						this.topic = response.topic;
						form.reset();
					}
			},
			error => {
				console.log(error);
				this.status = 'error';
			}
		);
	}

	deleteComment(id){
		this._commentService.delete(this.token, this.topic._id, id).subscribe(
			response => {
				if(!response.topic){
					this.status = 'error';
					}else{
						this.status = 'success';
						this.topic = response.topic;
					}
			},
			error => {
				console.log(error);
				this.status = 'error';
			}
		);
	}


}
