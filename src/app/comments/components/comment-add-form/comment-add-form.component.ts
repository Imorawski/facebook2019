import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import faker from 'faker';
import uuid from 'uuid';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-comment-add-form',
    templateUrl: './comment-add-form.component.html',
    styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent {

    @Output() addComment = new EventEmitter();

    comment = {
        id: null,
        createdTime: null,
        body: null,
        author: {
            id: null,
            name: null,
            avatarUrl: null,
        }
    };

    submit(form: NgForm) {
        // console.log('submit', this.comment);

        // shallow copy
        const comment = Object.assign({}, this.comment);
        comment.id = uuid.v4();
        comment.createdTime = new Date().toString();
        comment.author.id = uuid.v4();
        comment.author.name = faker.name.findName();
        comment.author.avatarUrl = faker.image.avatar();

        // deep copy
        // const comment = JSON.parse(JSON.stringify(this.comment));

        this.addComment.emit(comment);

        form.reset();
    }

}
