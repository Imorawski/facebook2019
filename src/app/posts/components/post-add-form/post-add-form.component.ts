import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import uuid from 'uuid';
import faker from 'faker';

@Component({
    selector: 'app-post-add-form',
    templateUrl: './post-add-form.component.html',
    styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

    @Output() addPost = new EventEmitter();

    addForm = new FormGroup({
        body: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ])
    });

    get body() {
        return this.addForm.get('body');
    }

    constructor() { }

    ngOnInit() {
    }

    submit() {
        const post = this.addForm.getRawValue();
        post.id = uuid.v4();;
        post.createdTime = new Date().toString();
        post.author = {
            id: uuid.v4(),
            name: faker.name.findName(),
            avatarUrl: faker.image.avatar(),
        };
        post.images = [];
        post.comments = [];

        // console.log('submit', post);
        this.addPost.emit(post);
        this.addForm.reset();
    }

}
