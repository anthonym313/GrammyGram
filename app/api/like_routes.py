from flask import Blueprint, request, jsonify
from app.models import db, Like
from flask_login import current_user, login_required

like_routes = Blueprint('likes', __name__)


# GET LIKES


@like_routes.route('/<int:image_id>/likes')
def all_likes_image(image_id):
    allLikes = Like.query.filter(
        Like.image_id == image_id).all()
    return jsonify([likeObj.to_dict() for likeObj in allLikes
                    if likeObj.like is True])

# GET DISLIKES


@ like_routes.route('/<int:image_id>/dislikes')
def all_dislikes_image(image_id):
    allLikes = Like.query.filter(
        Like.image_id == image_id).all()
    return jsonify([likeObj.to_dict() for likeObj in allLikes
                    if likeObj.like is False])

# POST
