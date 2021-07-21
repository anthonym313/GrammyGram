from flask import Blueprint, request, jsonify
from app.models import db, Image, Comment
from app.forms import PostForm
from flask_login import current_user, login_required
post_routes = Blueprint('posts', __name__)


@post_routes.route('/upload', methods=['POST'])
def index():
    req = request.get_json()
    image = Image(
        image_url=req['image_url'],
        description=req['description'],
        user_id=current_user.id
    )
    db.session.add(image)
    db.session.commit()
    return image.to_dict()


@post_routes.route('')
@login_required
def get_all_posts():
    posts = Image.query.all()
    return {'posts': [post.to_dict() for post in posts]}


@post_routes.route('/<int:image_id>')
def all_comments_image(image_id):
    allComments = Comment.query.filter(
        (Comment.image_id == image_id)).all()
    # returns all comments based on current image path
    return jsonify([comment.to_dict() for comment in allComments])


@post_routes.route('/<int:id>')
@login_required
def get_one_post(id):
    post = Image.query.get(id)
    print('post', post.to_dict())
    return post.to_dict()
