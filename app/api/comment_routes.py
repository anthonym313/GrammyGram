from flask import Blueprint, redirect
from app.models import db, Comment
from app.forms import CommentForm
from flask_login import current_user
​
comment_routes = Blueprint('comment', __name__)
​
# GET
​
​


@comment_routes.route('/<int:image_id>/comment')
def all_comments_image(image_id):
    comments = Comment.query.filter_by(
        Comment.image_id is image_id).all()
    # returns all comments based on current image path
    return comments


​
# POST
​
​


@comment_routes.route('/<int:image_id>/comment/create', methods=['POST'])
def index():
    # comment forms
    form = CommentForm()
    # if comment form valdiated
    if form.validate_on_submit():
        newComment = Comment()
        form.populate_obj(newComment)
        # populate object fields
        db.session.add(newComment)
        db.session.commit()
        return redirect('/api/image/:id')
    return '404 error'
