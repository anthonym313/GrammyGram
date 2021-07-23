from flask import Blueprint, request, redirect
from app.models import db, Comment
from app.forms import CommentForm
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)

# GET

# This is in post_routes
# @comment_routes.route('/<int:image_id>/comments')
# def all_comments_image(image_id):
#     comments = Comment.query.filter_by(
#         Comment.image_id is image_id).all()
#     # returns all comments based on current image path
#     print('all comments backend', comments.to_dict())
#     return comments.to_dict()

# POST


@comment_routes.route('/create', methods=['POST'])
@login_required
def index():
    req = request.get_json()
    newComment = Comment(
        user_id=current_user.id,
        image_id=req['image_id'],
        comment=req['comment']
    )
    db.session.add(newComment)
    db.session.commit()
    return newComment.to_dict()


@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    # front end provides comment & user session ID
    deleteComment = Comment.query.get(id)
    if (deleteComment.user_id == current_user.id):
        db.session.delete(deleteComment)
        db.session.commit()
    return {'message': 'Comment Deleted'}


@comment_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_comment(id):
    req = request.get_json()
    # front end provides comment & user session ID
    editComment = Comment(
        user_id=current_user.id,
        image_id=req['image_id'],
        comment=req
    )
    db.session.add(editComment)
    db.session.commit()
    return editComment.to_dict()

    #     req = request.get_json()
    # newComment = Comment(
    #     user_id=current_user.id,
    #     image_id=req['image_id'],
    #     comment=req['comment']
    # )
